import type {Props as ItemCard} from '../../common/ui/components/Cards/HomeCard/types';
import type {Props as ItemButton} from '../../common/ui/components/Button/types';
import type {ListRenderItemInfo} from 'react-native';
import {Component} from 'react';
import type {FlatListProps} from 'react-native';

export type RenderCardParams = ListRenderItemInfo<ItemCard>;

export type RenderButtonParams = ListRenderItemInfo<ItemButton>;

class CustomList extends Component<FlatListProps<ItemCard>> {}

class CustomList1 extends Component<FlatListProps<ItemButton>> {}

export type ListType = typeof CustomList;

export type ListType1 = typeof CustomList1;
