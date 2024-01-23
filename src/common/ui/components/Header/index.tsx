import {FC} from 'react';
import React from 'react';
import {View} from 'react-native';
import {TitleText} from './styles';

const Header: FC<Props> = ({title}) => {
  return (
    <View>
      <TitleText>{title}</TitleText>
    </View>
  );
};

export default Header;
