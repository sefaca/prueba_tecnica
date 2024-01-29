import {FC} from 'react';
import React from 'react';
import {Container, TitleText} from './styles';
import type {Props} from './types';

const Header: FC<Props> = ({title}) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
};

export default Header;
