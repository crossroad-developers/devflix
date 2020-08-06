import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;
export const ScrollView = styled.ScrollView``;

export const Header = styled.View`
    height: 150px;
`;

export const Search = styled.View`
    ${'' /* margin-top: 50px;
    background: #ccc;
    height: 50px;
    border-radius: 30px;
    padding: 15px; */}
`;

export const Main = styled.View`

`;

export const HeaderStream = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        // paddingLeft: 16,
    }
}))`
    margin: 20px 0;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    padding: 15px;
    font-weight: bold;
`;

export const TopVideos = styled.View`
    background: blue;
    height: 150px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleStreamer = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin: 0 50px;
`; 

export const TypeLanguage = styled.View`
    background: purple;
    height: 150px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`; 

export const UsersTwitch = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-left: 30px;
`; 

export const Details = styled.TouchableOpacity``;