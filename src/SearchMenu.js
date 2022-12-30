const APIKEY = `a23d2decd15aa7a36ce13403c94408de`;

import React, { useEffect, useState, useContext } from 'react';
import ResultContext, { ResultConsumer } from '../src/context/Result';
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import * as Location from "expo-location";
import MatchLocal from './MatchLocal';


function SearchMenu(){
  
  const [menu, setMenu] = useState('');
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  const { dispatch } = useContext(ResultContext);

  // const [latitude,setLatitude] = useState();
  // const [longitude,setLongitude] = useState();

  const ask = async () => {

    const { granted } = await Location.requestForegroundPermissionsAsync();
    const { coords: { latitude,longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 }); //coords를 통해 현재 위치의 좌표 받기
    // setLatitude(latitude);
    // setLongitude(longitude);

  };

  const handlemenu = text => {

    setMenu(text);

  }

  const searchMenu = async() => {

    let radius = 8000;
  
    let tmp = [];
    let latitude=37.27610495442637;
    let longitude=127.04264349478763;
    console.log("position",latitude,longitude);
    await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${String(menu)}&y=${Number(latitude)}&x=${Number(longitude)}&radius=${radius}`, {
      headers: {
        Authorization: `KakaoAK ${APIKEY}`
      }})
    .then((response) => response.json())
    .then((json) => {
      json.documents.map((item)=>{
        tmp.push({"id" : item.id, "name" : item.place_name, "link" : item.place_url, "group_code" : item.category_group_code, "code_name" : item.category_group_name , "category_name" : item.category_name, "address" : item.address_name, "x" : item.x, "y" : item.y })
        }),
      setData(tmp)
    })
    .catch((error) => console.error(error))

  }
        
 useEffect(()=>{
    ask();
  }, []);

  return (
    <>
    <View style={styles.view}>
    <>{console.log(data)}</>
        <TextInput
          style={styles.input}
          placeholder="메뉴 키워드를 입력하세요"
          autoCorrect={false}
          value={menu}
          onChangeText={handlemenu}
          onSubmitEditing={() => searchMenu()}
          multiline={false}
          returnKeyType="search"
        />
        <Text>{menu}</Text>
      </View>
      <MatchLocal result={data}/>
      </>
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