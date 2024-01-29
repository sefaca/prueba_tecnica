import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  description: string;
  name: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
