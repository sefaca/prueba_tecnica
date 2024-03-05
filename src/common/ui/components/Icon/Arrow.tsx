import React from 'react';
import type {FC} from 'react';
import {memo} from 'react';
import {colors} from '../../theme/colors';
import Svg, {Circle, G, Path} from 'react-native-svg';
import type {IconProps} from './types';

const Icon: FC<IconProps> = ({
  size = 36,
  color = colors.purpleMiddle,
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Circle cx="12" cy="12" r="12" fill="white" />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        d="M12 20V4m0 0-6 6m6-6 6 6"
      />
    </G>
  </Svg>
);

export default memo(Icon);
