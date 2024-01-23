import React from 'react';
// import {View} from 'react-native';
// import { TitleText } from './styles';
import {Screen} from '../../common/ui/components/Screen';
import StatusBar from '../../common/ui/components/StatusBar';
import Header from '../../common/ui/components/Header/index';

const Home = () => {
  return (
    <Screen>
      <StatusBar />
      <Header title="Learn" />
    </Screen>
  );
};

export default Home;
