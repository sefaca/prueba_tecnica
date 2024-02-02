import React, {useCallback, useState} from 'react';
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
import {CardsSeparator} from '../../common/ui/components/Cards/HomeCard/styles';
import type {RenderCardParams, RenderButtonParams} from './types';
import useViewModelDefault from './viewmodel';
import HorizontalCard from '../../common/ui/components/Cards/HorizontalCard';

const Home = ({useViewModel = useViewModelDefault}) => {
  const {buttonId, handlePressButton} = useViewModel();
  const [showHorizontalCards, setShowHorizontalCards] = useState(false);
  const [showVerticalCards, setShowVerticalCards] = useState(true);

  const renderItemButton = useCallback(
    ({item}: RenderButtonParams) => {
      const isAllButton = item.id === 'all';

      const onPress = () => {
        handlePressButton(item.id);

        setShowHorizontalCards(!isAllButton);

        setShowVerticalCards(isAllButton);
      };

      return (
        <Button
          id={item.id}
          title={item.title}
          actived={item.id === buttonId}
          onPress={onPress}
        />
      );
    },
    [buttonId, handlePressButton],
  );

  const renderItemCard = useCallback(
    ({item}: RenderCardParams) => (
      <HomeCard
        id={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
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
        description={item.description}
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
          ItemSeparatorComponent={CardsSeparator}
          style={flatListStyleCards}
          showsVerticalScrollIndicator={false}
        />
      )}
      {showHorizontalCards && (
        <FlatList
          data={CARDS_HORIZONTAL_DATA}
          renderItem={renderItemHorizontalCard}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={CardsSeparator}
          style={flatListStyleCards}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default Home;
