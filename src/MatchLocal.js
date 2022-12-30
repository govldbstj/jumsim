import { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      {console.log("item", item.name)}
      <Text style={styles.title}>{item.name}</Text>
    </View>
  )
}
const APIKEY = "6270a424d0df4bc99c336e6ebbbd6a6a";

const MatchLocal = ({ result }) => {
  let indata = [];
  const [data, setData] = useState([]);
  const match = () => {
    {
      //console.log("result: ", result);
      result && result.map((item, idx) => {
        const name = item.name;
        const arr2 = item.address.split(" ");
        fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?Key=${APIKEY}&Type=json&pIndex=1&pSize=100&SIGUN_NM=${arr2[1]}&CMPNM_NM=${name}`)
          .then((response) => response.json())
          .then((json) => {
            (json.RESULT != undefined ? "" : indata.push({ "id": json.RegionMnyFacltStus[1].row[0].FRCS_NO, "name": json.RegionMnyFacltStus[1].row[0].CMPNM_NM })),
              //console.log("indata: ", indata);
              setData(indata)
          }
          )
      })
    }
  }

  useEffect(() => {
    match();
  }, [result]);

useEffect(() => {
}, [data]);

  return (
    <View style={styles.view}>
      {console.log("data",data)}
      <FlatList
        //{...console.log("data",data)}
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
  view: {
    alignItems: 'center',
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MatchLocal;