import React from 'react';
import SearchMenu from './SearchMenu';
import RandomMenu from './RandomMenu';
import SearchOption from './SearchOption';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MenuTab = () => {
    return (
        <Tab.Navigator initialRouteName="점심 메뉴 추천" >
            <Tab.Screen name="검색">
                {({ navigation }) => <SearchMenu navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="옵션">
                {({ navigation }) => <SearchOption navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="랜덤">
                {({ navigation }) => <RandomMenu navigation={navigation} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const TabNavigation = () => {

    return (
        //console.log("train", trainsto),
        <Stack.Navigator>
            <Stack.Screen name="점심 메뉴 추천">
                {({ navigation }) => <MenuTab navigation={navigation} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default TabNavigation;