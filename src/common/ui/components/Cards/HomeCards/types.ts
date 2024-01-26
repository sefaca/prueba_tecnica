import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  variant?: Variant;
  title: string;
  description: string;
  name: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};