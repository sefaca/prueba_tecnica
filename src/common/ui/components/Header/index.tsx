import React, {FC} from 'react';
import IconButton from '../IconButton';
import {
  Container,
  TitleText,
  LeftAction,
  CenterAction,
  RightAction,
} from './styles';
import type {Props} from './types';

const Header: FC<Props> = ({
  title,
  leftIcon,
  rightIcon,
  sizeIcon,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <Container>
      <LeftAction>
        {!!leftIcon && (
          <IconButton icon={leftIcon} onPress={onPressLeft} size={sizeIcon} />
        )}
      </LeftAction>
      <CenterAction>
        <TitleText>{title}</TitleText>
      </CenterAction>
      <RightAction>
        {!!rightIcon && (
          <IconButton icon={rightIcon} onPress={onPressRight} size={sizeIcon} />
        )}
      </RightAction>
    </Container>
  );
};

export default Header;
