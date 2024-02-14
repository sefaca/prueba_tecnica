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
import {FlatList, Text} from 'react-native';
import {BUTTONS_DATA} from './constants';
import type {RenderCardParams, RenderButtonParams} from './types';
import useViewModelDefault from './viewmodel';
import HorizontalCard from '../../common/ui/components/Cards/HorizontalCard';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '../../common/data/apollo/generated/nodes';

const Home = ({useViewModel = useViewModelDefault}) => {
  const {
    buttonId,
    handlePressButton,
    showVerticalCards,
    showHorizontalCards,
    showPruebaFiltro,
  } = useViewModel();

  const {loading, error, data} = useQuery(GET_ITEMS);

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
        category={item.category.title}
        title={item.title}
        content={item.content}
        author={item.author}
      />
    ),
    [],
  );

  const renderItemHorizontalCard = useCallback(
    ({item}: RenderCardParams) => (
      <HorizontalCard
        id={item.id}
        image={item.image}
        category={item.category.title}
        title={item.title}
        content={item.content}
        author={item.author}
      />
    ),
    [],
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const apiData = data?.items || [];

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
          data={apiData}
          renderItem={renderItemCard}
          keyExtractor={item => item.id}
          numColumns={2}
          style={flatListStyleCards}
          showsVerticalScrollIndicator={false}
        />
      )}
      {showHorizontalCards && showPruebaFiltro && (
        <FlatList
          data={apiData}
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
