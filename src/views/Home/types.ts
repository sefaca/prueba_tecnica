import type {Props as ItemButton} from '../../common/ui/components/Button/types';
import type {ListRenderItemInfo} from 'react-native';
import {Component} from 'react';
import type {FlatListProps} from 'react-native';
import {Lesson} from './modal';

export type RenderCardParams = ListRenderItemInfo<Lesson>;

export type RenderButtonParams = ListRenderItemInfo<ItemButton>;

class CustomList extends Component<FlatListProps<Lesson>> {}

class CustomList1 extends Component<FlatListProps<ItemButton>> {}

export type ListType = typeof CustomList;

export type ListType1 = typeof CustomList1;
