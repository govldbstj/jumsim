import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
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
    const getRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 11);
        setMenu(random[randomNumber]);
        console.log("random menu",random[randomNumber]);
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
      console.log("menu",item);
      console.log("position", latitude, longitude);
      await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${String(item)}&y=${Number(latitude)}&x=${Number(longitude)}&radius=${radius}`, {
        headers: {
          Authorization: `KakaoAK ${APIKEY}`
        }})
      .then((response) => response.json())
      .then((json) => {
        json.documents.map((item)=>{
          tmp.push({"id" : item.id, "name" : item.place_name, "link" : item.place_url, "group_code" : item.category_group_code, "code_name" : item.category_group_name , "category_name" : item.category_name, "address" : item.address_name, "x" : item.x, "y" : item.y })
          }),
          console.log("tmp: ", tmp);
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
        <Button
            title='get random Menu'
            onPress={() => getRandomNumber()}
        />
        <Text>{menu}</Text>
        {console.log("data:", data)}
       <MatchLocalRandom/>
    </Container >
)
}

const styles = StyleSheet.create({
})

export default RandomMenu;