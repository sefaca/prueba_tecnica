import styled from 'styled-components/native';
import Text from '../Text';

export const TitleText = styled(Text).attrs({variant: 'title1'})`
  color: ${({theme}) => theme.colors.white};
  padding-top: ${({theme}) => theme.device.safeTop};
  background-color: ${({theme}) => theme.colors.background};
  text-align: center;
`;
