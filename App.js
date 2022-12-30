import React, { useEffect, useState } from 'react';
import {LogBox, FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import SearchMenu from './src/SearchMenu';
import Random from './modules/Random';

export default App = () => {

  LogBox.ignoreAllLogs();
  console.disableYellowBox = true;
  
  return(
  <>
  <SearchMenu/>
  <Random/>
  </>
  )
  
};
