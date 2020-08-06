import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Route from './Routes/routes';

export default function App (){
    return(
        <NavigationContainer>
            <StatusBar
                barStyle= 'light-content' backgroundColor='#000'
            />
            <Route/>
        </NavigationContainer>
    );
}