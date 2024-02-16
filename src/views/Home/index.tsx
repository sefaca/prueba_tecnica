import React, {useCallback} from 'react';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header/index';
import Button from '../../common/ui/components/Button';
import {
  Container,
  flatListStyleButtons,
  flatListStyleCards,
  menuHorizontalSeparator,
} from './styles';
import HomeCard from '../../common/ui/components/Cards/HomeCard';
import {FlatList} from 'react-native';
import {
  BUTTONS_DATA,
  CARDS_HORIZONTAL_DATA,
  CARDS_VERTICAL_DATA,
} from './constants';
import type {RenderCardParams, RenderButtonParams} from './types';
import useViewModelDefault from './viewmodel';
import HorizontalCard from '../../common/ui/components/Cards/HorizontalCard';

const Home = ({useViewModel = useViewModelDefault}) => {
  const {buttonId, handlePressButton, showVerticalCards, showHorizontalCards} =
    useViewModel();

  const renderItemButton = useCallback(
    ({item}: RenderButtonParams) => (
      <Button
        id={item.id}
        title={item.title}
        actived={item.id === buttonId}
        onPress={handlePressButton}
      />
    ),
    [buttonId, handlePressButton],
  );

  const renderItemCard = useCallback(
    ({item}: RenderCardParams) => (
      <HomeCard
        id={item.id}
        image={item.image}
        title={item.title}
        titleDescription={item.titleDescription}
        name={item.name}
      />
    ),
    [],
  );

  const renderItemHorizontalCard = useCallback(
    ({item}: RenderCardParams) => (
      <HorizontalCard
        id={item.id}
        image={item.image}
        title={item.title}
        titleDescription={item.titleDescription}
        name={item.name}
      />
    ),
    [],
  );

  return (
    <Container>
      <StatusBar />
      <Header title="Learn" />
      <FlatList
        data={BUTTONS_DATA}
        renderItem={renderItemButton}
        keyExtractor={item => item.id}
        horizontal
        ItemSeparatorComponent={menuHorizontalSeparator}
        style={flatListStyleButtons}
        showsHorizontalScrollIndicator={false}
      />
      {showVerticalCards && (
        <FlatList
          data={CARDS_VERTICAL_DATA}
          renderItem={renderItemCard}
          keyExtractor={item => item.id}
          numColumns={2}
          style={flatListStyleCards}
          showsVerticalScrollIndicator={false}
        />
      )}
      {showHorizontalCards && (
        <FlatList
          data={CARDS_HORIZONTAL_DATA}
          renderItem={renderItemHorizontalCard}
          keyExtractor={item => item.id}
          style={flatListStyleCards}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default Home;
