import React from 'react';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header/index';
import Button from '../../common/ui/components/Button';
import {Container} from './styles';
import MenuHorizontal from '../../common/ui/components/MenuHorizontal';
import HomeCards from '../../common/ui/components/Cards/HomeCards';
import {ScrollView} from 'react-native';

const Home = () => {
  return (
    <Container>
      <StatusBar />
      <Header title="Learn" />
      <MenuHorizontal>
        <Button title="All" />
        <Button title="Favourites" />
        <Button title="Harm Reduction" />
        <Button title="Integration" />
        <Button title="Mindfulness" />
        <Button title="Music" />
      </MenuHorizontal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeCards
          title="Mindfulness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          name="Janelle Lassalle"
        />
        <HomeCards
          title="Mindfulness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          name="Janelle Lassalle"
        />
        <HomeCards
          title="Mindfulness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          name="Janelle Lassalle"
        />
        <HomeCards
          title="Mindfulness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          name="Janelle Lassalle"
        />
        <HomeCards
          title="Mindfulness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          name="Janelle Lassalle"
        />
      </ScrollView>
    </Container>
  );
};

export default Home;
