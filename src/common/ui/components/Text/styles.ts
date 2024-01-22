import {Text as BaseText} from 'react-native';
import styled, {css} from 'styled-components/native';
import type {FlattenSimpleInterpolation} from 'styled-components';
import type {Props, Variant, FontDescriptor} from './types';

const body1Styles = css`
  font-size: 18px;
  line-height: 25.2px;
`;

const body2Styles = css`
  font-size: 15px;
  line-height: 22.5px;
`;

const captionStyles = css`
  font-size: 12px;
  line-height: 16.8px;
`;

const variantStyles: Record<Variant, FlattenSimpleInterpolation> = {
  'body1-bold': body1Styles,
  'body1-medium': body1Styles,
  'body2-bold': body2Styles,
  'body2-medium': body2Styles,
  button: css`
    font-size: 15px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  `,
  'button-small': css`
    font-size: 13px;
    line-height: 16.12px;
    letter-spacing: 0.26px;
    text-transform: uppercase;
  `,
  'caption-bold': captionStyles,
  'caption-medium': captionStyles,
  'overline-bold': css`
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.24px;
  `,
  'overline-medium': css`
    font-size: 12px;
    letter-spacing: 0.24px;
  `,
  'text-medium': css`
    font-size: 16px;
    line-height: 24px;
  `,
  title1: css`
    font-size: 40px;
    line-height: 56px;
  `,
  title2: css`
    font-size: 32px;
    line-height: 44.8px;
  `,
  title3: css`
    font-size: 24px;
    line-height: 33.6px;
  `,
};

const fontFamilyByVariant: FontDescriptor[] = [
  {
    variants: [
      'body1-bold',
      'body2-bold',
      'button',
      'button-small',
      'caption-bold',
      'overline-bold',
      'title1',
      'title2',
      'title3',
    ],
    family: 'CabinetGrotesk-Bold',
  },
  {
    variants: ['body1-medium', 'body2-medium', 'overline-medium'],
    family: 'CabinetGrotesk-Medium',
  },
  {
    variants: ['text-medium'],
    family: 'Inter-Medium',
  },
];

export const getTextStyle = (variant: Variant) => css`
  ${variantStyles[variant]};
  font-family: ${fontFamilyByVariant.find(it => it.variants.includes(variant))
    ?.family ?? 'CabinetGrotesk-Medium'};
`;

export const Text = styled(BaseText)<Props>`
  ${({variant}) => getTextStyle(variant!)};
`;
