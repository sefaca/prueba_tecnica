import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  category: any;
  title: string;
  author: string;
  content: string;
  id: string;
  image: any;
  style?: StyleProp<ViewStyle>;
};
