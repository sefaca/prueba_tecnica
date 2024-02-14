import React from 'react';
import {useRoute} from '@react-navigation/native';
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

import {ScrollView} from 'react-native';
import useViewModelDefault from './viewmodel';

const Detail = ({useViewModel = useViewModelDefault}) => {
  const route = useRoute();
  const {image, title, category, author, content} = route.params;
  const {goBack, handlePressFavorite} = useViewModel();
  return (
    <Container>
      <StatusBar />
      <Header
        leftIcon="cross"
        rightIcon="heart"
        sizeIcon={35}
        onPressLeft={goBack}
        onPressRight={handlePressFavorite}
      />
      <ScrollView>
        <MainContainer>
          <TitleCategory>{category}</TitleCategory>
          <TitleDescrition>{title}</TitleDescrition>
          <NameAuthor>{author}</NameAuthor>
          <ImageDetail source={{uri: image}} />
          <MainDescription>{content}</MainDescription>
        </MainContainer>
      </ScrollView>
    </Container>
  );
};

export default Detail;
