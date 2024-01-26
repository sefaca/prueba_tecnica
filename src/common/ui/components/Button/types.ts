import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  variant?: Variant;
  disabled?: boolean;
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export type ContainerProps = {
  variant: Variant;
  disabled: boolean;
};

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'border';

export type ButtonProps = {
  variant: Variant;
};
