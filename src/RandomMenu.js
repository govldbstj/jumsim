import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
flex : 1;
margin-top : 10;
align-items: center;
`;

const RandomMenu = () => {
    const [number, setNumber] = React.useState(1);

    const getRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setNumber(randomNumber);
    }
    
    return (
        <Container>
            <Button
                title='get random number'
                onPress={() => getRandomNumber()}
            />
            <Text>{number}</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
})

export default RandomMenu;