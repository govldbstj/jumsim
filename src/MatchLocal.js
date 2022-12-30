import { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';

let indata = [];

const renderItem = ({ item }) => {
  return (
    console.log("item", item),
    <View>
        <Text>{item.name}</Text>
    </View>
  )
}
const APIKEY="6270a424d0df4bc99c336e6ebbbd6a6a";

function MatchLocal({result}){
  const [data,setData]=useState([]);
  {result&&result.map((item,idx)=>{
    const name=item.name;
  const arr2=item.address.split(" ");
  fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?Key=${APIKEY}&Type=json&pIndex=1&pSize=100&SIGUN_NM=${arr2[1]}&CMPNM_NM=${name}`)
  .then((response) => response.json())
  .then((json)=>{
     (json.RESULT!=undefined? "":indata.push({"id":json.RegionMnyFacltStus[1].row[0].FRCS_NO,"name":json.RegionMnyFacltStus[1].row[0].CMPNM_NM})),
     setData(indata)
  }
    )
  })
  }
    return(
      <View>
          <FlatList
          {...console.log("flatlist",data)}
          keyExtractor={item => String(item.id)}
          data={data}
          style={[styles.flatlist]}
          renderItem={renderItem}
          windowSize={3}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    width: '100%',
  }
});

export default MatchLocal;