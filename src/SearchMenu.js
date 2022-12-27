import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from "expo-location";

function SearchMenu(){
  const [menu, setMenu] = useState('');
  const [data, setData] = useState([]);
  const [position,setPosition]=useState([]);
  const [initialRegion, setinitialRegion] = useState();
  const [latitude,setLatitude]=useState();
  const [longitude,setLongitude]=useState();
  const [isTyping,setIsTyping]=useState(); // 검색어 한 번에 전달하여 렌더링 횟수 줄이기 위한 변수
  const handlemenu = item => {
    setIsTyping(item);
  }
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    const { coords: { latitude,longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 }); //coords를 통해 현재 위치의 좌표 받기
    setLatitude(latitude);
    setLongitude(longitude);
    setinitialRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    })
  };
  const onPress=()=>{
    setMenu(isTyping);
  }
  const searchMenu = () => {
    
    console.log("ok")
    let result=[];
    let xcoord = 127.06;
    let ycoord = 37.51;
    let radius = 20000;
    let cafe = 'CE7';

    // useEffect(() => {
    //   fetch(`https://dapi.kakao.com/v2/local/search/category.json?category\_group\_code=${cafe}&y=${latitude}&x=${longitude}&radius=${radius}`, {
    //     headers: {
    //       Authorization: `KakaoAK ${APIKEY}`
    //     }})
    //     .then((response) => response.json())
    //     .then((json) => setData(json))
    //     .catch((error) => console.error(error))
    //     .finally(() => setLoading(false));
    // }, []);
    console.log(latitude,longitude,radius,menu);//키워드로 검색
      fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?y=${Number(latitude)}&x=${Number(longitude)}&radius=${radius}&query=${menu}`, {
        headers: {
          Authorization: `KakaoAK ${APIKEY}`
        }})
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
      // fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${Number(longitude)}&y=${Number(latitude)}`,{
      //   headers:{
      //     Authorization: `KakaoAK ${APIKEY}`
      //   }})
      //   .then((response) => response.json())
      //   .then((json) => setPosition(json))
      //   .catch((error) => console.error(error))
      //   console.log(position);
      console.log(data);
      if(data.documents!==undefined){
        console.log("in");
        data.documents.map((item)=>{
          result.push([item.id,item.place_name, item.place_url,item.category_group_code,item.category_group_name,item.category_name,item.address_name,item.x,item.y])
        })
        console.log("result",result);
        let arr=[];
        arr=result[0].address_name.split(" ");
        console.log(result[0].address_name);
        console.log(arr[1]);
      }
     

  }
useEffect(()=>{
  ask();
  searchMenu();
},[menu]);
  return (
    <View style={styles.view}>
      <Text style = {styles.text}>점심 메뉴 추천</Text>
        <TextInput
          style={styles.input}
          placeholder="메뉴 키워드를 입력하세요"
          autoCorrect={false}
          value={isTyping}
          onChangeText={handlemenu}
          onSubmitEditing={onPress}
          multiline={false}
          returnKeyType="search"
        />
        <Text>{menu}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
  input: {
    height: 42,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  view: {
      alignItems: 'center'
  },
  text: {
      fontSize: 30,
      marginTop: 60,
      margintBottom: 30
  }
});

export default SearchMenu;