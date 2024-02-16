import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  image: any;
  title: string;
  titleDescription: string;
  name: string;
  style?: StyleProp<ViewStyle>;
};
