import type {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  titleDescription: string;
  name: string;
  description: string;
  style?: StyleProp<ViewStyle>;
};
