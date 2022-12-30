import React, { useEffect, useState,useRef } from 'react';
import {LogBox, FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import SearchMenu from './src/SearchMenu';
import LottieView from 'lottie-react-native';
import { Button } from 'antd';
import { PositionProvider } from './src/context/Position';
import GetPosition from './src/GetPosition';
import GetMenu from './src/GetMenu';
;export default App = () => {
  const animation=useRef(null);
  LogBox.ignoreAllLogs();
    console.disableYellowBox = true;
return(
  <>
  {/* <View style={StyleSheet.animationContainer}>
  <LottieView
    autoPlay
    ref={animation}
    style={{
      width: 200,
      height: 200,
      backgroundColor: '#eee',
    }}
    source={require('./path/testStar.json')}
  />
  <Button
    title='Restart Animation'
    onProgress={()=>{
      animation.current?.reset();
      animation.current?.play();
    }}
    />
  </View> */}
  <PositionProvider>
    <GetPosition/>
<GetMenu/>
  </PositionProvider>
  </>
) 
  };
  const styles=StyleSheet.create({
    animationContainer:{
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      flex:1,
    }
  });
