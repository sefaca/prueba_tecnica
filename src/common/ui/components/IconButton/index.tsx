import type {FC} from 'react';
import React, {memo} from 'react';
import Icon from '../Icon/';
import {Container} from './styles';
import type {Props} from './types';

const IconButton: FC<Props> = ({
  color,
  icon,
  size = 35,
  containerSize,
  style,
}) => (
  <Container size={containerSize ?? size} style={style}>
    <Icon name={icon} size={size} color={color} />
  </Container>
);

export default memo(IconButton);
