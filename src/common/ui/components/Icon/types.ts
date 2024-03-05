import type {StyleProp, ViewStyle} from 'react-native';
import type {icons} from './icons';

export type Props = IconProps & {
  name: IconName;
  onPress?: () => void;
};

export type IconName = keyof typeof icons;

export type IconProps = {
  active?: boolean;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
