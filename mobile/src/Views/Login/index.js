import React from 'react';
import { Fontisto } from '@expo/vector-icons'
import logo from '../../Assets/logo.png';
// import { AsyncStorage, Alert } from 'react-native';

import { Container
        , Image
        , Header
        , Main
        , IconTwitch
        , Description
        , SingIn
        , TextSingIn
    }
from './styled-component';


export default function Login({navigation}) {
        return (
            <Container>
                <Header>
                    <Image source={logo}/>
                </Header>
                
                <Main>
                    <IconTwitch>
                        <Fontisto name='twitch' size={60} color='black'/>
                    </IconTwitch>

                    <Description>Entre com sua conta Twitch</Description>
                    
                    <SingIn onPress={() => navigation.navigate('Home')}>
                        <TextSingIn>Entrar</TextSingIn>
                    </SingIn>
                </Main>
            </Container>
        );
}
