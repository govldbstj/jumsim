import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Dropdown from './modules/Dropdown';
import { category, bunsik } from './menu_category';

const Container = styled.View`
flex : 1;
margin-top : 10;
align-items: center;
`;

const SearchOption = () => {
    const [choice, setChoice] = useState('');

    const itemChoose = (item) => {
        setChoice(item);
    }

    return (
        <Container>
            <View style={styles.cate}>
                <View style={styles.left}>
                    <Dropdown
                        category={category}/>
                </View>
                <View style={styles.right}>
                    <Dropdown
                        category={bunsik}/>
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    cate: {
        flexDirection: 'row',
    },
    left: {
        marginRight: 10,
    },
    right: {
        marginLeft: 10,
    },
})

export default SearchOption;