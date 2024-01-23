import {forwardRef, memo} from 'react';
import type {Text as NativeText} from 'react-native';
import {Text as BaseText} from './styles';
import type {Props} from './types';

const Text = forwardRef<NativeText, Props>(
  ({family = undefined, style, variant = 'caption-medium', ...rest}, ref) => (
    <BaseText
      ref={ref}
      allowFontScaling={false}
      style={[family ? {fontFamily: family} : {}, style]}
      variant={variant}
      {...rest}
    />
  ),
);

export default memo(Text);
