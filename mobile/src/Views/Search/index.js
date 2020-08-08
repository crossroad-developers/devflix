import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import gratis from '../../Assets/gratis.png';
import {
        Container,
        ScrollView,
        Header,
        SearchVideos,
        CancelButton,
        Cancel,
        Main,
        Results,
        Details,
        UsersTwitch,
        TitleStreamer,
} 
from './styled-component'



export default function Search({navigation}) {

        return (
            <Container>
                <ScrollView>
                    <Header>  
                        <Ionicons name='ios-search' size={20} color='#ddd' style={{
                            backgroundColor: '#323232',
                            flex: 1,
                            height: 30,
                            flexDirection: 'row',
                            borderRadius: 2,
                            // justifyContent: 'center',
                            // alignItems: 'center',
                        }}/>

                        <SearchVideos>
                        </SearchVideos>
                        <CancelButton>
                            <Cancel> 
                                Cancelar
                            </Cancel> 
                        </CancelButton>
                    </Header>

                    <Main>
                        <Results>
                            <Details onPress={() => navigation.navigate('Details')}>
                                <UsersTwitch source={gratis}/>
                                <TitleStreamer> Gratis </TitleStreamer>
                            </Details>
                            <Details>
                                <UsersTwitch source={gratis}/>
                                <TitleStreamer> Gratis </TitleStreamer>
                            </Details>
                            <Details>
                                <UsersTwitch source={gratis}/>
                                <TitleStreamer> Gratis </TitleStreamer>
                            </Details>
                            <Details>
                                <UsersTwitch source={gratis}/>
                                <TitleStreamer> Gratis </TitleStreamer>
                            </Details>
                            <Details>
                                <UsersTwitch source={gratis}/>
                                <TitleStreamer> Gratis </TitleStreamer>
                            </Details>
                        </Results>
                    </Main>

                </ScrollView>
            </Container>
        );
}



