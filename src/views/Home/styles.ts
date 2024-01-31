import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  padding-bottom: 20px;
`;

export const flatListStyleButtons = {
  padding: 20,
};

export const flatListStyleCards = {
  marginLeft: 20,
  marginRight: 20,
};
