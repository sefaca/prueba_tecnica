import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  padding-top: ${({theme}) => theme.device.safeTop};
  align-items: center;
`;

export const TitleText = styled(Text).attrs({
  variant: 'title1',
})`
  color: ${({theme}) => theme.colors.white};
`;
