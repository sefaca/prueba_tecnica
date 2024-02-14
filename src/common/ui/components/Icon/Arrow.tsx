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
      d="M20 12H4m0 0 6 6m-6-6 6-6"
    />
  </Svg>
);

export default memo(Icon);
