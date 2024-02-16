import type {TextProps} from 'react-native';

export type Variant =
  | 'button'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'body1'
  | 'body2'
  | 'body3';

export type Props = {
  variant?: Variant;
} & TextProps;
