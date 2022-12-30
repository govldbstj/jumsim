import { useState, useEffect, useContext } from "react";
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ResultContext from "./context/Result";
import MenuList from "./MenuList";

const APIKEY="6270a424d0df4bc99c336e6ebbbd6a6a";
const renderItem = ({ item }) => {
  return(
    <View style={styles.view}>
      <Text>{item.name}</Text>
    </View>
  );
};
function MatchLocal(){
 
let indata=[];
const {result} =useContext(ResultContext);
// console.log("context result",result);
  const [data,setData]=useState([]);
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
              setData([...indata])
               //console.log("indata",indata)
          }
          )
      })
    }
  }
  useEffect(() => {
    match();
  }, [result]);

    return(
        <SafeAreaView style={styles.container}>
          <FlatList
          //{...console.log("flatlist",data)}
          keyExtractor={item => item.id}
          data={data}
          renderItem={renderItem}
          windowSize={3}
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  view : {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6495ED',
    backgroundColor: '#FFFFFF',
    padding: 7,
    margin: 3,
    width: Dimensions.get('window').width-40,
  },
});

export default MatchLocal;