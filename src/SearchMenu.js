import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from "expo-location";

function SearchMenu(){
  const [menu, setMenu] = useState('');
  const [data, setData] = useState([]);
  const [initialRegion, setinitialRegion] = useState();
  const [latitude,setLatitude]=useState();
  const [longitude,setLongitude]=useState();
  const [isTyping,setIsTyping]=useState(); // 검색어 한 번에 전달하여 렌더링 횟수 줄이기 위한 변수
  const handlemenu = menu => {
    setIsTyping(menu);
  }
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 }); //coords를 통해 현재 위치의 좌표 받기
    setLatitude(latitude);
    setLongitude(longitude);
    setinitialRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    })
  };
  const searchMenu = () => {
    
    console.log("ok")
    const APIKEY = `a23d2decd15aa7a36ce13403c94408de`;
    console.log(data);

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
      fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${menu}&y=${Number(latitude)}&x=${Number(longitude)}&radius=${radius}`, {
        headers: {
          Authorization: `KakaoAK ${APIKEY}`
        }})
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
       
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
          onSubmitEditing={()=>setMenu(isTyping)}
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