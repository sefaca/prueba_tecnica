import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-bottom: 20px;
`;

export const flatListStyleButtons = {
  paddingLeft: 20,
  marginVertical: 20,
};

export const flatListStyleCards = {
  marginLeft: 20,
  marginRight: 20,
};

export const menuHorizontalSeparator = styled.View`
  width: 15px;
  height: 50px;
`;
