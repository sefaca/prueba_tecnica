import type {FC} from 'react';
import Cross from './Cross';
import Heart from './Heart';
import type {IconProps} from './types';

const createSvgIcons = <T extends {[name: string]: FC<IconProps>}>(
  cfg: T,
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  cross: Cross,
  heart: Heart,
});
