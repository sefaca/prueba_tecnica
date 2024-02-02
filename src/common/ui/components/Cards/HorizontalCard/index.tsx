import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {
  Container,
  ContainerData,
  NameAuthor,
  TextDescrition,
  TitleCategory,
  ImageCardHorizontal,
} from './styles';
import type {Props} from './types';
import {TouchableOpacity} from 'react-native';

const HorizontalCard: FC<Props> = ({
  image,
  title,
  description,
  name,
  style,
}) => {
  return (
    <TouchableOpacity>
      <Container style={style}>
        <ImageCardHorizontal source={image} />
        <ContainerData>
          <TitleCategory>{title}</TitleCategory>
          <TextDescrition numberOfLines={2}>{description}</TextDescrition>
          <NameAuthor>{name}</NameAuthor>
        </ContainerData>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HorizontalCard);
