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
        }
      })
        .then((response) => response.json())
        .then((json) => {
          // console.log("json",json);
          let tmp_result=[];
          json.documents.map((item) => {
            tmp_result.push({"id" : item.id, "place_name": item.place_name, "place_url": item.place_url, 
            "category_group_code": item.category_group_code, "category_group_name": item.category_group_name, 
            "category_name": item.category_name, "address_name" : item.address_name, "x": item.x, "y": item.y})
          })
          setData(tmp_result);
        })
        .catch((error) => console.error(error))
  }
  useEffect(() => {
    ask();
  }, [])

  return (
    console.log("data: ", data),
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