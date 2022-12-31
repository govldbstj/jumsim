import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Hyperlink from 'react-native-hyperlink';
import openURL from '../modules/openrUrl';
import share from '../modules/share';
const styles = StyleSheet.create({
});

const MenuList = ({ item }) => {
    console.log("item in MenuList",item);
    return (
        <TouchableOpacity
        onPress={()=>openURL(item.link)}
        >
        <View>
            <Text>{item.name}</Text>
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

export default MenuList;