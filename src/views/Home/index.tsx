import React, {useCallback} from 'react';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header/index';
import Button from '../../common/ui/components/Button';
import {Container, flatListStyleButtons, flatListStyleCards} from './styles';
import HomeCards from '../../common/ui/components/Cards/HomeCards';
import {FlatList} from 'react-native';
import {BUTTONS_DATA, CARDS_VERTICAL_DATA} from './constants';
import {menuHorizontalSeparator} from '../../common/ui/components/MenuHorizontal/styles';
import {CardsSeparator} from '../../common/ui/components/Cards/HomeCards/styles';
import type {RenderCardParams, RenderButtonParams} from './types';

const Home = () => {
  const renderItemButton = useCallback(
    ({item}: RenderButtonParams) => <Button id={item.id} title={item.title} />,
    [],
  );

  const renderItemCard = useCallback(
    ({item}: RenderCardParams) => (
      <HomeCards
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
      <FlatList
        data={CARDS_VERTICAL_DATA}
        renderItem={renderItemCard}
        keyExtractor={item => item.id}
        numColumns={2}
        ItemSeparatorComponent={CardsSeparator}
        style={flatListStyleCards}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
