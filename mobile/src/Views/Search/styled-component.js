import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background: #000;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  margin-top: 50px;
  ${'' /* background: red; */}
`;

export const SearchVideos = styled.TextInput`
  background: #323232;
  width: 260px;
  height: 30px;
  border-radius: 2px;
  
`;

export const CancelButton = styled.TouchableOpacity`
`;

export const Cancel = styled.Text`
  color:#fff;
  font-weight: bold;
  margin-left: 15px;
`;

export const Main = styled.View`
  justify-content: center;
  margin: 20px 0px;
  background: #323232;
  padding: 0 10px;
`;

export const Results = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Details = styled.TouchableOpacity`
  align-items: center;
  margin: 0 5px;
`;

export const UsersTwitch = styled.Image`
  height: 150px;
  width: 120px;
`;

export const TitleStreamer = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;