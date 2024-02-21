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
import useIdCallback from '../../../utils/useIdCallback';

const HorizontalCard: FC<Props> = ({
  id,
  image,
  category,
  title,
  author,
  onPress,
  style,
}) => {
  const handleOnPress = useIdCallback(onPress, id);

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Container style={style}>
        <ImageCardHorizontal source={{uri: image}} />
        <ContainerData>
          <TitleCategory>{category.title}</TitleCategory>
          <TextDescrition numberOfLines={2}>{title}</TextDescrition>
          <NameAuthor>{author}</NameAuthor>
        </ContainerData>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HorizontalCard);
