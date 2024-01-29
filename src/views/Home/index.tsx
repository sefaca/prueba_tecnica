import React from 'react';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header/index';
import Button from '../../common/ui/components/Button';
import {Container} from './styles';
import HomeCards from '../../common/ui/components/Cards/HomeCards';
import {FlatList} from 'react-native';
import {buttonsDATA, cardsVerticalDATA} from './constants';
import {menuHorizontalSeparator} from '../../common/ui/components/MenuHorizontal/styles';
import {CardsSeparator} from '../../common/ui/components/Cards/HomeCards/styles';

const Home = () => {
  const flatListStyleButtons = {
    margin: 20,
  };
  const flatListStyleCards = {
    marginLeft: 20,
    marginRight: 20,
  };

  return (
    <Container>
      <StatusBar />
      <Header title="Learn" />
      <FlatList
        data={buttonsDATA}
        renderItem={({item}) => <Button title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
        ItemSeparatorComponent={menuHorizontalSeparator}
        style={flatListStyleButtons}
      />
      <FlatList
        data={cardsVerticalDATA}
        renderItem={({item}) => (
          <HomeCards
            title={item.title}
            description={item.description}
            name={item.name}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        ItemSeparatorComponent={CardsSeparator}
        style={flatListStyleCards}
      />
    </Container>
  );
};

export default Home;
