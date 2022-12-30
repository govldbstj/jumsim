import { useState, useEffect, useContext } from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ResultContext from "./context/Result";
import MenuList from "./MenuList";

const APIKEY="6270a424d0df4bc99c336e6ebbbd6a6a";
const renderItem = ({ item }) => (
<MenuList item={item}/>
);
function MatchLocal(){
 
let indata=[];
const {result} =useContext(ResultContext);
// console.log("context result",result);
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
              setData([...indata])
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
        <SafeAreaView>
          <FlatList
          {...console.log("flatlist",data)}
          keyExtractor={item => item.id}
          data={data}
          style={[styles.flatlist]}
          renderItem={renderItem}
          windowSize={3}
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
  }
});

export default MatchLocal;