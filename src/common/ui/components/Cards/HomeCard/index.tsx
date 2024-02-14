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

const HomeCard: FC<Props> = ({id, category, title, author, content, style}) => {
  const {handlePressButton, navigation} = useViewModel();
  const handlePress = () => {
    const imageUrl = `https://picsum.photos/300/300?random=${id}`;
    handlePressButton(id);
    navigation.navigate('Detail', {
      id,
      image: imageUrl,
      category,
      title,
      content,
      author,
    });
  };

  console.log(id);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Container style={style}>
        <ImageCardHorizontal
          source={{uri: 'https://picsum.photos/id/2/200/300'}}
        />
        <TitleCategory>{category}</TitleCategory>
        <TextDescrition>{title}</TextDescrition>
        <NameAuthor>{author}</NameAuthor>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HomeCard);
