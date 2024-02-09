import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type ContainerProps = {
  disabled: boolean;
};
