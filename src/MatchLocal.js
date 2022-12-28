import { useState } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
let indata=[];
const renderItem=({item})=>{
  return(
    <View>
      <View>
        <Text>{item[1]}</Text>
      </View>
      <View>
        <Text>{item[2]}</Text>
      </View>
    </View>
  )
}
function MatchLocal({result}){
  const [data,setData]=useState([]);
  console.log("check",result)
  const name=result[1];
  const arr2=result[6].split(" ");
  fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?Key=6270a424d0df4bc99c336e6ebbbd6a6a&Type=json&pIndex=1&pSize=100&SIGUN_NM=${arr2[1]}&CMPNM_NM=${name}`)
  .then((response) => response.json())
  .then((json)=>{
    //  console.log("json",json),
    //  console.log(json.RegionMnyFacltStus[0].head[1].RESULT.CODE);
     (json.RESULT!=undefined? "":indata.push([json.RegionMnyFacltStus[1].row[0].FRCS_NO,json.RegionMnyFacltStus[1].row[0].CMPNM_NM])),
    //  console.log("indata",indata)
     setData(indata);
  }
    )
    return(
      <View>
          <FlatList
          keyExtractor={item => item[0]}
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