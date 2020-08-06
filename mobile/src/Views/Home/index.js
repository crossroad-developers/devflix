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
                            <TopVideos>
                                <Details onPress={() => navigation.navigate('Details')}>
                                {/* passar o id do meninao para pegar em details, assim sera exibido os detalhes da stream */}
                                    <UsersTwitch source={gratis}/>
                                    <TitleStreamer> Gratis </TitleStreamer>
                                </Details>
                            </TopVideos>
                        </HeaderStream>  

                        <Title>Language</Title>
                        <HeaderStream>
                            <TypeLanguage>
                                <Details onPress={() => navigation.navigate('Details')}>
                                    <UsersTwitch source={gratis}/>
                                    <TitleStreamer> Gratis </TitleStreamer>
                                </Details>
                            </TypeLanguage>
                        </HeaderStream>  

                        <Title>I don't know</Title>
                        <HeaderStream>
                            <TypeLanguage>
                                <Details onPress={() => navigation.navigate('Details')}>
                                    <UsersTwitch source={gratis}/>
                                    <TitleStreamer> Gratis </TitleStreamer>
                                </Details>
                            </TypeLanguage>
                        </HeaderStream>    
                    </Main>
                </ScrollView>
            </Container>
        );
}
