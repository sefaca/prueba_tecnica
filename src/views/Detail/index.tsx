import React, {useRef} from 'react';
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
  ArrowContainer,
} from './styles';
import {ScrollView} from 'react-native';
import useViewModelDefault from './viewmodel';
import {RouteProp} from '@react-navigation/native';
import {ScreensParams} from '../../core/navigation/types';
import Icon from '../../common/ui/components/Icon';

type DetailRouteProp = RouteProp<ScreensParams, 'Detail'>;

interface DetailProps {
  route: DetailRouteProp;
}

const Detail: React.FC<DetailProps> = ({route}) => {
  const {goBack, handleScroll, isScrolled, scrollToTop} = useViewModelDefault();
  const scrollViewRef = useRef(null);

  const {category, title, author, image, content} = route.params.lesson;

  return (
    <Container>
      <StatusBar />
      <Header
        leftIcon="cross"
        rightIcon="heart"
        sizeIcon={35}
        onPressLeft={goBack}
      />
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <MainContainer>
          <TitleCategory>{category.title}</TitleCategory>
          <TitleDescrition>{title}</TitleDescrition>
          <NameAuthor>{author}</NameAuthor>
          <ImageDetail source={{uri: image}} />
          <MainDescription>{content}</MainDescription>
        </MainContainer>
      </ScrollView>
      {isScrolled && (
        <ArrowContainer>
          <Icon name="arrow" onPress={scrollToTop} />
        </ArrowContainer>
      )}
    </Container>
  );
};

export default Detail;
