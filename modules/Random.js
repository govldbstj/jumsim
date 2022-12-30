import React, {useEffect, useState } from 'react';
import styled from'styled-components/native';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

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

const Random = () => {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }

    let randnum = getRandomInt(0,9);

    let rand = ['피자', '치킨', '햄버거', '한식', '초밥', '커피', '디저트', '떡볶이', '양식', '중식'];
    let food = rand[randnum];

    console.log(food);

};

export default Random;