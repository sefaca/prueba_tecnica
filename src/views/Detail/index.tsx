import React, {FC, memo} from 'react';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header';
import {
  Container,
  MainContainer,
  TitleCategory,
  TitleDescrition,
  NameAuthor,
  ImageDetail,
  MainDescription,
} from './styles';
import {DETAIL_DATA} from '../Home/constants';
import type {Props} from './types';
import {ScrollView} from 'react-native';

const Detail: FC<Props> = ({style}) => {
  const {image, title, titleDescription, name, description} = DETAIL_DATA[0];

  return (
    <Container style={style}>
      <StatusBar />
      <Header leftIcon="cross" rightIcon="heart" sizeIcon={35} />
      <ScrollView>
        <MainContainer>
          <TitleCategory>{title}</TitleCategory>
          <TitleDescrition>{titleDescription}</TitleDescrition>
          <NameAuthor>{name}</NameAuthor>
          <ImageDetail source={image} />
          <MainDescription>{description}</MainDescription>
        </MainContainer>
      </ScrollView>
    </Container>
  );
};

export default memo(Detail);
