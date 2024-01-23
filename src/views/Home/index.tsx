import React from 'react';
import {View} from 'react-native';
import {TitleText} from './styles';
import {Screen} from '../../common/ui/components/Screen';

const Home = () => {
  return (
    <Screen>
      <View>
        <TitleText>Learn</TitleText>
      </View>
    </Screen>
  );
};

export default Home;
