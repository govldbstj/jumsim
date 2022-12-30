import React, { useEffect, useState } from 'react';
import { LogBox, FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import { ResultProvider } from './src/context/Result';
import { FlagProvider } from './src/context/Flag';
export default App = () => {
  LogBox.ignoreAllLogs();
  console.disableYellowBox = true;
  return (
    <FlagProvider>
    <ResultProvider>
    <NavigationContainer>
    <Navigation/>
  </NavigationContainer>
  </ResultProvider>
  </FlagProvider>
  )

};

const styles = StyleSheet.create({
  input: {
    height: 42,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
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
