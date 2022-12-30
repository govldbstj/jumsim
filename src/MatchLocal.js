import { useState } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import ResultContext, { ResultConsumer } from './context/Result';

let indata=[];

const renderItem=({item})=>{
  return(
    <View>
        <Text>{item.name}</Text>
    </View>
  )
}

function MatchLocal(){

  const [data,setData]=useState([]);
  const name=result.name;
  const arr2=result.address.split(" ");

  const { result } = useContext(ResultContext);

  fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?Key=${APIKEY}&Type=json&pIndex=1&pSize=100&SIGUN_NM=${arr2[1]}&CMPNM_NM=${name}`)
  .then((response) => response.json())
  .then((json)=>{
     (json.RESULT!=undefined? "":indata.push({"id":json.RegionMnyFacltStus[1].row[0].FRCS_NO,"name":json.RegionMnyFacltStus[1].row[0].CMPNM_NM})),
     setData(indata)
  }
  )
  
  return(
    <View>
      <FlatList
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