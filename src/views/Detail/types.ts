import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  image: any;
  title: string;
  category: string;
  author: string;
  content: string;
  style?: StyleProp<ViewStyle>;
};
