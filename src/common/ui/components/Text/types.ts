import type {TextProps} from 'react-native';

export type Variant =
  | 'button'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'body1'
  | 'body2';

export type Props = {
  variant?: Variant;
} & TextProps;
