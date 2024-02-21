import React, {useCallback} from 'react';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header/index';
import Button from '../../common/ui/components/Button';
import {
  Container,
  flatListStyleButtons,
  flatListStyleCards,
  MenuHorizontalSeparator,
  List,
  MenuList,
} from './styles';
import HomeCard from '../../common/ui/components/Cards/HomeCard';
import {Text} from 'react-native';
import {BUTTONS_DATA} from './constants';
import type {RenderCardParams, RenderButtonParams} from './types';
import useViewModelDefault from './viewmodel';
import HorizontalCard from '../../common/ui/components/Cards/HorizontalCard';

const Home = ({useViewModel = useViewModelDefault}) => {
  const {
    buttonCategory,
    filteredItems,
    handlePressButton,
    handlePressCard,
    showVerticalCards,
    showHorizontalCards,
    loading,
    error,
  } = useViewModel();

  const renderItemButton = useCallback(
    ({item}: RenderButtonParams) => (
      <Button
        id={item.id}
        title={item.title}
        actived={item.id === buttonCategory}
        onPress={handlePressButton}
      />
    ),
    [buttonCategory, handlePressButton],
  );

  const renderItemCard = useCallback(
    ({item, index}: RenderCardParams) => (
      <HomeCard
        id={item.id}
        image={`https://picsum.photos/id/${index}/200/200`}
        category={item.category}
        title={item.title}
        content={item.content}
        author={item.author}
        onPress={handlePressCard}
      />
    ),
    [handlePressCard],
  );

  const renderItemHorizontalCard = useCallback(
    ({item, index}: RenderCardParams) => (
      <HorizontalCard
        id={item.id}
        image={`https://picsum.photos/id/${index}/150/150`}
        category={item.category}
        title={item.title}
        content={item.content}
        author={item.author}
        onPress={handlePressCard}
      />
    ),
    [handlePressCard],
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <Container>
      <StatusBar />
      <Header title="Learn" />
      <MenuList
        data={BUTTONS_DATA}
        renderItem={renderItemButton}
        keyExtractor={item => item.id}
        horizontal
        ItemSeparatorComponent={MenuHorizontalSeparator}
        style={flatListStyleButtons}
        showsHorizontalScrollIndicator={false}
      />
      {showVerticalCards && (
        <List
          data={filteredItems}
          renderItem={renderItemCard}
          keyExtractor={item => item.id}
          numColumns={2}
          style={flatListStyleCards}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text>ASdsads</Text>}
        />
      )}
      {showHorizontalCards && (
        <List
          data={filteredItems}
          renderItem={renderItemHorizontalCard}
          keyExtractor={item => item.id}
          style={flatListStyleCards}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text>Error</Text>}
        />
      )}
    </Container>
  );
};

export default Home;
