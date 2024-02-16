import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {Container, Title} from './styles';
import type {Props} from './types';
import useIdCallback from '../../utils/useIdCallback';

const Button: FC<Props> = ({id, title, style, actived = false, onPress}) => {
  const handleOnPress = useIdCallback(onPress, id);

  return (
    <Container onPress={handleOnPress} actived={actived} style={style}>
      <Title>{title}</Title>
    </Container>
  );
};

export default memo(Button);
