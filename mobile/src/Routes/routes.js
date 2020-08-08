import React from 'react';
import {createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';


import Login from '../Views/Login';
import Home from '../Views/Home';
import Details from '../Views/Details';
import Search from '../Views/Search';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBottom = () => (
    <Tab.Navigator
        tabBarOptions = {{
            activeTintColor: '#fff',
            labelStyle: {
                fontSize: 14
            },
            style: { 
                backgroundColor: '#000',
            }
        }}
    >
        <Tab.Screen name="Inicio" component={Home} options={{ headerShown: false, 
            tabBarIcon: ({size, color}) => (
                <MaterialIcons name='home' size={size} color ={color}/>
            )
        }}/>
        <Tab.Screen name="Busca" component={Search} options={{ headerShown: false,
            
                tabBarIcon: ({size, color}) => (
                 <FontAwesome name='search' size={size} color={color}/>
                )
            }}
         />
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