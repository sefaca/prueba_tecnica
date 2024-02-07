import type {StyleProp, ViewStyle} from 'react-native';
import type {IconName} from '../Icon/types';

export type Props = {
  title?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  sizeIcon?: number;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  style?: StyleProp<ViewStyle>;
};
