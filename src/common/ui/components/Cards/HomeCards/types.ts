import type {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
  name: string;
  style?: StyleProp<ViewStyle>;
};
