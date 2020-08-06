import React from 'react';
import {createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../Views/Login';
import Home from '../Views/Home';
import Details from '../Views/Details';
import Search from '../Views/Search';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBottom = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
    </Tab.Navigator>
)

export default  function Route() {
    return (
            <AuthStack.Navigator>
                <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
                <AuthStack.Screen name="Home" component={TabBottom} options={{ headerShown: false }}/>
                <AuthStack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
            </AuthStack.Navigator>   
    );
}