import React from 'react';
import {forwardRef, memo} from 'react';
import type {Text as NativeText} from 'react-native';
import {Text as BaseText} from './styles';
import type {Props} from './types';

const Text = forwardRef<NativeText, Props>(({style, variant, ...rest}, ref) => (
  <BaseText
    ref={ref}
    allowFontScaling={false}
    style={style}
    variant={variant}
    {...rest}
  />
));

export default memo(Text);
