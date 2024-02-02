import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {
  Container,
  NameAuthor,
  TextDescrition,
  TitleCategory,
  ImageCardHorizontal,
} from './styles';
import type {Props} from './types';

const HomeCard: FC<Props> = ({image, title, description, name, style}) => {
  return (
    <Container style={style}>
      <ImageCardHorizontal source={image} />
      <TitleCategory>{title}</TitleCategory>
      <TextDescrition>{description}</TextDescrition>
      <NameAuthor>{name}</NameAuthor>
    </Container>
  );
};

export default memo(HomeCard);
