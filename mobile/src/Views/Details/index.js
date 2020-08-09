import React from 'react'
import {
        Container,
        Text,
} 
from './styled-component'

export default function Details({ navigation }) {

    const UserTwitch = navigation.getParam('username');
        return (
            <Container>
                <Text> {UserTwitch} </Text>
                {/* Preciso receber o id da stream para poder exibir os detalhes aqui */}
            </Container>
        );
}


