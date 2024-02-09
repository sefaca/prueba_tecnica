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
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {StackParamList} from '../../../../../core/navigation/Tabs/index';

const HomeCard: FC<Props> = ({
  id,
  image,
  title,
  titleDescription,
  name,
  style,
}) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const handlePress = () => {
    navigation.navigate('Detail', {
      id,
      image,
      title,
      titleDescription,
      name,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container style={style}>
        <ImageCardHorizontal source={image} />
        <TitleCategory>{title}</TitleCategory>
        <TextDescrition>{titleDescription}</TextDescrition>
        <NameAuthor>{name}</NameAuthor>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HomeCard);
