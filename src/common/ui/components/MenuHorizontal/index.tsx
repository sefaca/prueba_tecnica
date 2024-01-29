import React from 'react';
import type {FC} from 'react';
import {ScrollView} from 'react-native';
import {memo} from 'react';
import {ContainerMenuHorizontal} from './styles';
import type {Props} from './types';

const MenuHorizontal: FC<Props> = ({children, style}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ContainerMenuHorizontal style={style}>
        {children}
      </ContainerMenuHorizontal>
    </ScrollView>
  );
};

export default memo(MenuHorizontal);
