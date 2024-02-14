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
import useViewModel from '../../../../../views/Home/viewmodel';

const HomeCard: FC<Props> = ({
  id,
  image,
  category,
  title,
  author,
  content,
  style,
}) => {
  const {handlePressButton, navigation} = useViewModel();

  const handlePress = () => {
    handlePressButton(id);
    navigation.navigate('Detail', {
      id,
      image,
      category,
      title,
      content,
      author,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container style={style}>
        <ImageCardHorizontal source={{uri: image}} />
        <TitleCategory>{category}</TitleCategory>
        <TextDescrition>{title}</TextDescrition>
        <NameAuthor>{author}</NameAuthor>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HomeCard);
