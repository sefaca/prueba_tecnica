import type {FC} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Title, Button} from './styles';
import type {Props} from './types';

const MenuButton: FC<Props> = ({
  title,
  onPress,
  variant,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container variant={variant} disabled={disabled} style={style}>
        <Title>{title}</Title>
      </Container>
      <Button onPress={onPress} disabled={disabled} variant={variant} />
    </TouchableOpacity>
  );
};

export default memo(MenuButton);
