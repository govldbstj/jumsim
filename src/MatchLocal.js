import { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';

let indata = [];

const renderItem = ({ item }) => {
  return (
    //console.log("item", item),
    <View>
      <View>
        <Text>{item.id}</Text>
      </View>
      <View>
        <Text>{item.name}</Text>
      </View>
    </View>
  )
}

const MatchLocal = ({ result }) => {
  const [data, setData] = useState([]);

  const match = () => {
    const name = result.place_name;
    const arr2 = result.address_name.split(" ");
    fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?Key=6270a424d0df4bc99c336e6ebbbd6a6a&Type=json&pIndex=1&pSize=100&SIGUN_NM=${arr2[1]}&CMPNM_NM=${name}`)
      .then((response) => response.json())
      .then((json) => {
        //  console.log("json",json),
        //  console.log(json.RegionMnyFacltStus[0].head[1].RESULT.CODE);
        (json.RESULT != undefined ? "" : indata.push({ "id": json.RegionMnyFacltStus[1].row[0].FRCS_NO, "name": json.RegionMnyFacltStus[1].row[0].CMPNM_NM })),
          //  console.log("indata",indata)
          setData(indata);
      })
  }

  useEffect(() => {
    match();
  }, [])

  return (
    console.log("check", data),
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        style={[styles.flatlist]}
        renderItem={renderItem}
        windowSize={3}
      >
      </FlatList>
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