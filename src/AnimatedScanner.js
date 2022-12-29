import React from 'react';
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import { AnimatedScanner } from 'react-native-animation-catalog';

const Animated = () => (
  <AnimatedScanner
      stopZooming={true}
      style={styles.customStyle}
      borderColor = {'#000000'}
      strokeDelay = {1400}
      strokeColor = {'#0000FF'}
      initialZoomScale = {0.9}
      height = {200}
      zoomingDelay = {800}
      borderRadius = {10}
      borderWidth = {2}
      strokeWidth = {240}
  />
);

const styles = StyleSheet.create({
  customStyle: {
    marginTop: 100,
  },
});

export default Animated;