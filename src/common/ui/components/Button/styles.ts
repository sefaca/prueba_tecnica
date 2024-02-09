import styled, {css} from 'styled-components/native';
import Text from '../../components/Text';
import {TouchableOpacity} from 'react-native';
import type {ContainerProps} from './types';

export const Container = styled.View<ContainerProps>`
  padding: 5px 15px;
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
