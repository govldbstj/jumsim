import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { random } from './menu_category';
import * as Location from "expo-location";
import RandomResultContext from './context/RandomResult';
import MatchLocalRandom from './MatchLocalRandom';

import ResultContext from '../src/context/Result';
const APIKEY = `a23d2decd15aa7a36ce13403c94408de`;
const Container = styled.View`
flex : 1;
margin-top : 10;
align-items: center;
`;

const RandomMenu = () => {

    const [menu, setMenu] = useState('');
    const [data, setData] = useState([]);

    let flag=false;

    const getRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 11);
        setMenu(random[randomNumber]);
        //console.log("random menu",random[randomNumber]);
        searchMenu(random[randomNumber]);
    };

    const { dispatch } = useContext(RandomResultContext);
    // const [latitude,setLatitude] = useState();
    // const [longitude,setLongitude] = useState();
  
    const ask = async () => {
  
      const { granted } = await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 }); //coords를 통해 현재 위치의 좌표 받기
      // setLatitude(latitude);
      // setLongitude(longitude);
  
    };

    const searchMenu = async (item) => {
  
      let radius = 8000;
  
      let tmp = [];
      let latitude = 37.27610495442637;
      let longitude = 127.04264349478763;

      await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${String(item)}&y=${Number(latitude)}&x=${Number(longitude)}&radius=${radius}`, {
        headers: {
          Authorization: `KakaoAK ${APIKEY}`
        }})
      .then((response) => response.json())
      .then((json) => {
        json.documents.map((item)=>{
          tmp.push({"id" : item.id, "name" : item.place_name, "link" : item.place_url, "group_code" : item.category_group_code, "code_name" : item.category_group_name , "category_name" : item.category_name, "address" : item.address_name, "x" : item.x, "y" : item.y })
          }),
          //console.log("tmp: ", tmp);
        setData(tmp),
        dispatch(tmp)
      })
      .catch((error) => console.error(error))
    }
  
    useEffect(() => {
      ask();
    }, []);

return (
    <Container>
      <Text style = {styles.title}>오늘의 메뉴</Text>
      { menu.length == 0 ? <Text style = {styles.in}>클릭해서 정해보아요</Text>
      : <></>
        }
        <TouchableOpacity onPress={() => getRandomNumber()}>
        <Image style = {{ width: 120, height: 120}}
        source = {require('../icons/yummy.png')}/>
        </TouchableOpacity>
        {menu.length!=0?flag=true:flag=false}
        { menu.length != 0 ?
          <><Text style = {styles.top}>{menu} 어떠세요?</Text>
          <Text style = {styles.detail}>지역화폐 사용이 가능한 내 주변 {menu} 맛집</Text></>
          : <></>}
       {menu.length!=0?<MatchLocalRandom/>:<></>}
    </Container >
)
}

const styles = StyleSheet.create({
  title:{
    fontWeight: 'bold',
    fontSize : 25,
    margin : 10,
  },
  in:{
    fontSize : 17,
    marginBottom : 12
  },
  top:{
    fontSize : 20,
    marginTop : 10
  },
  detail:{
    fontSize : 13,
    marginTop : 7,
    marginBottom : 7
  }
})

export default RandomMenu;