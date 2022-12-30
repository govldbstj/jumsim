import { useState, useEffect, useContext } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import ResultContext from "./context/Result";


const APIKEY="6270a424d0df4bc99c336e6ebbbd6a6a";

function MatchLocal(){
  const renderItem = ({ item }) => {
      <View>
          <Text>{item.name}</Text>
      </View>
  }
let indata=[];
const {result} =useContext(ResultContext);
console.log("context result",result);
  const [data,setData]=useState([]);
  const match = () => {
    {
      console.log("result: ", result);
      result && result.map((item, idx) => {
        const name = item.name;
        const arr2 = item.address.split(" ");
        fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?Key=${APIKEY}&Type=json&pIndex=1&pSize=100&SIGUN_NM=${arr2[1]}&CMPNM_NM=${name}`)
          .then((response) => response.json())
          .then((json) => {
            (json.RESULT != undefined ? "" : indata.push({ "id": json.RegionMnyFacltStus[1].row[0].FRCS_NO, "name": json.RegionMnyFacltStus[1].row[0].CMPNM_NM })),
              setData(indata),
              console.log("indata",indata)
          }
          )
      })
    }
  }
  useEffect(() => {
    match();
  }, [result]);

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