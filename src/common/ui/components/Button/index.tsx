import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Title, Button} from './styles';
import type {Props} from './types';

const MenuButton: FC<Props> = ({title, onPress, disabled = false, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container disabled={disabled} style={style}>
        <Title>{title}</Title>
      </Container>
      <Button onPress={onPress} disabled={disabled} />
    </TouchableOpacity>
  );
};

export default memo(MenuButton);
