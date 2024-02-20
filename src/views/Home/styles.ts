import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';
import type {ListType, ListTypeMenu} from './types';
import {FlatList} from 'react-native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
`;

export const MenuHorizontalSeparator = styled.View`
  width: 15px;
  height: 40px;
`;

export const EmptyText = styled(Text)`
  color: ${({theme}) => theme.colors.background};
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 200,
    marginLeft: 20,
    marginRight: 20,
  },
})`` as unknown as ListType;

export const MenuList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingRight: 20,
    paddingLeft: 20,
    marginVertical: 12,
    marginBottom: 20,
    height: 35,
  },
})`` as unknown as ListTypeMenu;
