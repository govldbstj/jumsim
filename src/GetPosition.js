import React,{ useContext,useEffect,useState } from "react";
import PositionContext from "./context/Position";
import * as Location from "expo-location";
import GetMenu from "./GetMenu";

const GetPosition=()=>{
  const [latitude,setLatitude]=useState();
  const [longitude,setLongitude]=useState();
  const {dispatch} =useContext(PositionContext);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    const { coords: { latitude,longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 }); //coords를 통해 현재 위치의 좌표 받기
    setLatitude(latitude);
    setLongitude(longitude);
    console.log("get position");
    return( dispatch([latitude,longitude]));
   
  };
  useEffect(()=>{
    ask();
    console.log("here");
  },[])
  return(
    <GetMenu/>
  )
 
}
export default GetPosition;