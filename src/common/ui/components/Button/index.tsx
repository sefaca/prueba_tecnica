import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Title, ButtonBase} from './styles';
import type {Props} from './types';
import useIdCallback from '../../utils/useIdCallback';

const Button: FC<Props> = ({id, title, style, actived = false, onPress}) => {
  const handleOnPress = useIdCallback(onPress, id);

  return (
    <TouchableOpacity onPress={handleOnPress} style={style}>
      <Container actived={actived}>
        <Title>{title}</Title>
      </Container>
      <ButtonBase />
    </TouchableOpacity>
  );
};

export default memo(Button);
