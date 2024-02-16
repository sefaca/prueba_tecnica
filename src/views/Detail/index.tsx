import React from 'react';
// import {RouteProp} from '@react-navigation/native';
// import type {StackParamList} from 'ruta/del/stack';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header';
import {
  Container,
  MainContainer,
  //   TitleCategory,
  //   TitleDescrition,
  //   NameAuthor,
  //   ImageDetail,
  //   MainDescription,
} from './styles';

import {ScrollView} from 'react-native';
import useViewModelDefault from './viewmodel';

const Detail = ({useViewModel = useViewModelDefault}) => {
  //   const {image, title, titleDescription, name, description} = route.params;
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
          {/* <TitleCategory>{title}</TitleCategory>
          <TitleDescrition>{titleDescription}</TitleDescrition>
          <NameAuthor>{name}</NameAuthor>
          <ImageDetail source={image} />
          <MainDescription>{description}</MainDescription> */}
        </MainContainer>
      </ScrollView>
    </Container>
  );
};

export default Detail;
