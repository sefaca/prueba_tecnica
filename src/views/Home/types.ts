import type {Props as ItemCard} from '../../common/ui/components/Cards/HomeCard/types';
import type {Props as ItemButton} from '../../common/ui/components/Button/types';
import type {ListRenderItemInfo} from 'react-native';

export type RenderCardParams = ListRenderItemInfo<ItemCard>;

export type RenderButtonParams = ListRenderItemInfo<ItemButton>;
