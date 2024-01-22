import type {TextProps} from 'react-native';

// export type Fonts =

export type Variant =
| 'body1-bold'
| 'body1-medium'
| 'body2-bold'
| 'body2-medium'
| 'button'
| 'button-small'
| 'caption-bold'
| 'caption-medium'
| 'overline-bold'
| 'overline-medium'
| 'text-medium'
| 'title1'
| 'title2'
| 'title3';

export type Props = {
  variant?: Variant;
  // family?: Fonts;
} & TextProps;

// export type FontDescriptor = {
//     variants: Variant[];
//     family: Fonts;
// };