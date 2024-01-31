import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Title, Button} from './styles';
import type {Props} from './types';

const MenuButton: FC<Props> = ({title, disabled = false, style}) => (
  <TouchableOpacity>
    <Container disabled={disabled} style={style}>
      <Title>{title}</Title>
    </Container>
    <Button disabled={disabled} />
  </TouchableOpacity>
);

export default memo(MenuButton);
