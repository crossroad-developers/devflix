import styled from 'styled-components/native';

export const Container = styled.View`
  background: #7159C1;
  flex: 1;
`;
export const Header = styled.View`
  height: 100px;
  margin-top: 100px;
  align-items:center;
`;

export const Image = styled.Image`
 
`;

export const Main = styled.View`
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const IconTwitch = styled.View`
  margin: 15px 0;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const SingIn = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  background: #FFF;
  border-radius: 20px;
  shadowColor: #000;
  shadowOffset: { width: 0,height: 5,};
  shadowOpacity: 0.34;
  shadowRadius: 6.27;
  elevation: 10;
`;

export const TextSingIn = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;