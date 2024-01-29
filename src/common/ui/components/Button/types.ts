import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export type ContainerProps = {
  disabled: boolean;
};
