import React from 'react'
import {
        Container,
        Text,
} 
from './styled-component'

export default function Details() {

        return (
            <Container>
                <Text> textInComponent </Text>
                {/* Preciso receber o id da stream para poder exibir os detalhes aqui */}
            </Container>
        );
}


