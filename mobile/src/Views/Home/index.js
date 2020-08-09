import React  from 'react'
import gratis from '../../Assets/gratis.png';
import { ScrollView
        ,Container
        , Header
        , Search
        , Main
        , TopVideos
        , TypeLanguage 
        , Details
        , UsersTwitch
        , HeaderStream
        , Title
        , TitleStreamer
}
from './styled-component'


const items = [
    {
        key: String(Math.random()),
        img: gratis,
        username: 'gratis'
    },
    {
        key: String(Math.random()),
        img: gratis,
        username: 'gratis02'
    },
    {
        key: String(Math.random()),
        img: gratis,
        username: 'gratis03'
    },
    {
        key: String(Math.random()),
        img: gratis,
        username: 'gratis04'
    },
]

export default function Home({navigation}) {
        return (
            <Container>
                <ScrollView>
                    <Header>
                        <Search></Search>
                    </Header>
                    
                    <Main>
                        <Title>Top Videos</Title>
                        <HeaderStream>
                            {items.map((item) => {
                                return (
                                    <TopVideos key={item.key}>
                                        <Details onPress={() => {navigation.navigate('Details', {username: item.username} )}
                                        }>
                                        {/* passar o id do meninao para pegar em details, assim sera exibido os detalhes da stream */}
                                            <UsersTwitch source={item.img}/>
                                            <TitleStreamer> {item.username} </TitleStreamer>
                                        </Details>
                                    </TopVideos>
                                )
                            })}
                        </HeaderStream>  

                        <Title>Language</Title>
                        <HeaderStream>
                        {items.map((item) => {
                            return(
                                <TypeLanguage key={item.key}>
                                    <Details onPress={() => {navigation.navigate('Details', { username: item.username })}
                                    }>
                                        <UsersTwitch source={item.img}/>
                                        <TitleStreamer> {item.username} </TitleStreamer>
                                    </Details>
                                </TypeLanguage>
                                )
                            })}
                        </HeaderStream>  

                        <Title>I don't know</Title>
                        <HeaderStream>
                        {items.map((item) => {
                            return(
                                <TypeLanguage key={item.key}>
                                    <Details onPress={() => {navigation.navigate('Details', { username: item.username})}
                                    }>
                                        <UsersTwitch source={item.img}/>
                                        <TitleStreamer> {item.username} </TitleStreamer>
                                    </Details>
                                </TypeLanguage>
                                )
                            })}
                        </HeaderStream>    
                    </Main>
                </ScrollView>
            </Container>
        );
}
