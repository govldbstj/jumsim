import { useState, useEffect, useContext } from "react";
import { FlatList, Text, View, StyleSheet, Dimensions } from 'react-native';
import RandomResultContext from "./context/RandomResult";
import MenuList from "./MenuList";

const APIKEY="6270a424d0df4bc99c336e6ebbbd6a6a";

const renderItem = ({ item }) => {
  return(
<MenuList item={item}/>
  );
  
};
function MatchLocalRandom(){
let indata=[];

const {randomResult}=useContext(RandomResultContext);
  const [data,setData]=useState([]);
  const match = () => {
    {
      randomResult && randomResult.map((item, idx) => {
        const name = item.name;
        const arr2 = item.address.split(" ");
        fetch(`https://openapi.gg.go.kr/RegionMnyFacltStus?Key=${APIKEY}&Type=json&pIndex=1&pSize=100&SIGUN_NM=${arr2[1]}&CMPNM_NM=${name}`)
          .then((response) => response.json())
          .then((json) => {
            (json.RESULT != undefined ? "" : indata.push({ "id": json.RegionMnyFacltStus[1].row[0].FRCS_NO, "name": json.RegionMnyFacltStus[1].row[0].CMPNM_NM, "address": json.RegionMnyFacltStus[1].row[0].REFINE_ROADNM_ADDR,"link":item.link })),
              setData([...indata])
          }
          )
      })
    }
  }
  useEffect(() => {
    match();
  }, [randomResult]);

    return(
        <View style={styles.shadow}>
          <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={renderItem}
          windowSize={3}
        />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  view : {
    alignItems: 'center',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fffff',
    padding: 10,
    margin: 3,
    width: Dimensions.get('window').width-40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  in:{
    fontWeight: 'semibold',
    fontSize : 17,
    marginBottom : 5
  },
  detail:{
    fontSize : 13,
    marginBottom : 7
  }
});

export default MatchLocalRandom;