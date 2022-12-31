import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Hyperlink from 'react-native-hyperlink';
import openURL from '../modules/openrUrl';
import share from '../modules/share';

const MenuList = ({ item }) => {

    return (
        <TouchableOpacity
        onPress={()=>openURL(item.link)}
        >
        <View style={styles.view}>
      <Text style = {styles.in}>{item.name}</Text>
      <Text style = {styles.detail}>{item.address}</Text>
    </View>
        </TouchableOpacity>
    );
};

MenuList.defaultProps = {
    onPressOut: () => {},
};

MenuList.propTypes = {
    item: PropTypes.object.isRequired,
    onPressOut : PropTypes.func,
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
      backgroundColor: '#FFFFFF',
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
export default MenuList;