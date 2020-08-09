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

const items = [
    {
        key: String(Math.random()),
        img: gratis,
        username: 'Gratis'
    },
    {
        key: String(Math.random()),
        img: gratis,
        username: 'Gratis02'
    },
    {
        key: String(Math.random()),
        img: gratis,
        username: 'Gratis03'
    },
    {
        key: String(Math.random()),
        img: gratis,
        username: 'Gratis04'
    },
]

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
                        <Results >
                            {items.map((item) => {
                                return (
                                    <Details key={item.key} onPress={() => {navigation.navigate('Details', {
                                        username: item.username})
                                        }}>
                                        <UsersTwitch source={item.img}/>
                                        <TitleStreamer> {item.username} </TitleStreamer>
                                    </Details>
                                )
                            })}
                        </Results>
                    </Main>

                </ScrollView>
            </Container>
        );
}



