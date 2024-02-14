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
import useViewModel from '../../../../../views/Home/viewmodel';

const HorizontalCard: FC<Props> = ({
  id,
  category,
  title,
  author,
  content,
  style,
}) => {
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

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container style={style}>
        <ImageCardHorizontal
          source={{uri: `https://picsum.photos/150/150?random=${id}`}}
        />
        <ContainerData>
          <TitleCategory>{category}</TitleCategory>
          <TextDescrition numberOfLines={2}>{title}</TextDescrition>
          <NameAuthor>{author}</NameAuthor>
        </ContainerData>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HorizontalCard);
