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
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {StackParamList} from '../../../../../core/navigation/Tabs/index';

const HorizontalCard: FC<Props> = ({
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
        <ContainerData>
          <TitleCategory>{title}</TitleCategory>
          <TextDescrition numberOfLines={2}>{titleDescription}</TextDescrition>
          <NameAuthor>{name}</NameAuthor>
        </ContainerData>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HorizontalCard);
