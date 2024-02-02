import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  title: string;
  onPress?: (id: string) => void;
  actived?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type ContainerProps = {
  actived: boolean;
};
