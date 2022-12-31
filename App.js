import React, { useEffect, useState } from 'react';
import { LogBox, FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import { ResultProvider } from './src/context/Result';
import { RandomResultProvider } from './src/context/RandomResult';
import * as SplashScreen from 'expo-splash-screen';

export default App = () => {

  LogBox.ignoreAllLogs();
  console.disableYellowBox = true;
  function sleep(time){
    return new Promise(
      resolve=>setTimeout(resolve,time)
    );
   }
 async function delay_splash(){
  await SplashScreen.preventAutoHideAsync();
  await sleep(10000);
  await SplashScreen.hideAsync();
 }
  delay_splash();
  return (
    <RandomResultProvider>
    <ResultProvider>
    <NavigationContainer>
    <Navigation/>
  </NavigationContainer>
  </ResultProvider>
  </RandomResultProvider>
  )

};

const styles = StyleSheet.create({
  input: {
    height: 42,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  view: {
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    marginTop: 60,
    margintBottom: 30
  }
});
