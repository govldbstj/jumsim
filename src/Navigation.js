import React from 'react';
import SearchMenu from './SearchMenu';
import RandomMenu from './RandomMenu';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MenuTab = () => {
    return (
        <Tab.Navigator initialRouteName="" >
            <Tab.Screen name="메뉴 추천">
                {({ navigation }) => <RandomMenu navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="메뉴 검색">
                {({ navigation }) => <SearchMenu navigation={navigation} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const TabNavigation = () => {

    return (
        //console.log("train", trainsto),
        <Stack.Navigator>
            <Stack.Screen name="오늘의 메뉴">
                {({ navigation }) => <MenuTab navigation={navigation} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default TabNavigation;