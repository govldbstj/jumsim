import React, {useEffect, useState } from 'react';
import styled from'styled-components/native';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

// 1. src/searchStation의 자식

const Content_name = styled.Text`
flex: 1;
font-size: 16.7px;
fontFamily:'BinggraeSamanco';
`;

const Content_locate = styled.Text`
flex: 1;
font-size: 14px;
fontFamily:'BinggraeSamanco';
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

    return (
        <TouchableOpacity>
            <Content_name>{item.name}</Content_name>
            <Content_locate>{item.id}</Content_locate>
        </TouchableOpacity>
    );
};

StationList.defaultProps = {
    onPressOut: () => {},
};

StationList.propTypes = {
    item: PropTypes.object.isRequired,
    onPressOut : PropTypes.func,
};

export default MenuList;