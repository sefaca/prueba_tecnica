import styled from 'styled-components/native';
import Text from '../../components/Text';
import {TouchableOpacity} from 'react-native';
import type {ContainerProps} from './types';

export const Container = styled(TouchableOpacity)<ContainerProps>`
  padding: 5px 15px;
  border-radius: 12px;
  background-color: ${({theme, actived}) =>
    actived ? theme.colors.secondary : theme.colors.primary};
  align-items: center;
`;

export const Title = styled(Text).attrs({
  variant: 'button',
})`
  color: ${({theme}) => theme.colors.white};
`;
