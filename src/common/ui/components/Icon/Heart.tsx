import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {colors} from '../../theme/colors';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

const Icon: FC<IconProps> = ({size = 24, color = colors.white, ...props}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 24" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12.493 5.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.635 2.105 6.585 6.544 8.207 7.98.182.162.272.242.378.274a.504.504 0 0 0 .286 0c.106-.032.197-.112.378-.273 1.623-1.437 6.573-5.876 8.208-7.98 1.967-2.532 1.658-6.133-.89-8.251-2.549-2.118-5.84-1.512-7.839.826Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default memo(Icon);
