import React, {useEffect, useState } from 'react';
import styled from'styled-components/native';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

// 1. src/searchStation의 자식

const Content_name = styled.Text`
flex: 1;
font-size: 16.7px;
`;

const Content_locate = styled.Text`
flex: 1;
font-size: 14px;
`;

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6495ED',
        backgroundColor: '#FFFFFF',
        padding: 7,
        margin: 3,
        width: Dimensions.get('window').width-40,
    },
});

const MenuList = ({ item }) => {
    console.log("item in MenuList",item);
    return (
        <TouchableOpacity>
            <Content_name>{item.id}</Content_name>
            <Content_locate>{item.name}</Content_locate>
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