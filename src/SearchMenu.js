import React, { useEffect, useState,useContext } from 'react';
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import PositionContext from './context/Position';
import MatchLocal from './MatchLocal';
const APIKEY = `a23d2decd15aa7a36ce13403c94408de`;
function SearchMenu({menu}){
  const [data, setData] = useState([]);
  const {position}=useContext(PositionContext);
  console.log("menu",menu);
  const searchMenu = () => {
    let result=[];
    let radius = 8000;
    let latitude=position[0];
    let longitude=position[1];
    console.log("position",latitude,longitude)
      fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${String(menu)}&y=${Number(latitude)}&x=${Number(longitude)}&radius=${radius}`, {
        headers: {
          Authorization: `KakaoAK ${APIKEY}`
        }})
        .then((response) => response.json())
        .then((json) => {
          json.documents.map((item)=>{
            result.push({"id":item.id,"name":item.place_name,"link": item.place_url,"group_code":item.category_group_code,"code_name":item.category_group_name,"category_name":item.category_name,"address":item.address_name,"x":item.x,"y":item.y})
          }),
          setData(result)
        })
        .catch((error) => console.error(error))
  }

  return (
    <View style={styles.view}>
      {searchMenu}
        {data.length!=0&&<MatchLocal result={data} {...console.log("data",data)}/>}
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