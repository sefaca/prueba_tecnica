import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {colors} from '../../theme/colors';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

const Icon: FC<IconProps> = ({size = 24, color = colors.white, ...props}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 7 7 17M7 7l10 10"
    />
  </Svg>
);

export default memo(Icon);
