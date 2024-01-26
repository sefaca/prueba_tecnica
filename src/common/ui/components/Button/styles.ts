import styled, {css} from 'styled-components/native';
import Text from '../Text';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 5px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.primary};
  ${({disabled}) => disabled && disabledContainerStyle};
`;

const disabledContainerStyle = css`
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const Title = styled(Text).attrs({
  variant: 'button',
})`
  color: ${({theme}) => theme.colors.white};
`;

export const Button = styled(TouchableOpacity)`
  border-radius: 16px;
`;
