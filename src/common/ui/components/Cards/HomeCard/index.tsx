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
import {TouchableOpacity} from 'react-native';
import useIdCallback from '../../../utils/useIdCallback';

const HomeCard: FC<Props> = ({
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
        <TitleCategory>{category.title}</TitleCategory>
        <TextDescrition>{title}</TextDescrition>
        <NameAuthor>{author}</NameAuthor>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HomeCard);
