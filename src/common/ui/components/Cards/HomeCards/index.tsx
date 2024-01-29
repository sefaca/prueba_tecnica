import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {
  Container,
  ItemContainer,
  NameAuthor,
  TextDescrition,
  TitleCategory,
  ImageCardHorizontal,
} from './styles';
import type {Props} from './types';

const HomeCards: FC<Props> = ({title, description, name, style}) => {
  return (
    <Container>
      <ItemContainer style={style}>
        <ImageCardHorizontal
          source={require('../../../../../assets/images/svq.webp')}
        />
        <TitleCategory>{title}</TitleCategory>
        <TextDescrition>{description}</TextDescrition>
        <NameAuthor>{name}</NameAuthor>
      </ItemContainer>
    </Container>
  );
};

export default memo(HomeCards);
