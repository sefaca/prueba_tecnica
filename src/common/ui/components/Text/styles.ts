import {Text as BaseText} from 'react-native';
import styled, {css} from 'styled-components/native';
import type {Props, Variant} from './types';

const variantStyles: Record<Variant, ReturnType<typeof css>> = {
  button: css`
    font-size: 19px;
    letter-spacing: 0.3px;
    font-weight: bold;
  `,
  title1: css`
    font-size: 40px;
    line-height: 56px;
  `,
  title2: css`
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  `,
  title3: css`
    font-size: 24px;
    line-height: 33.6px;
  `,
  body1: css`
    font-size: 20px;
    font-weight: bold;
  `,
  body2: css`
    font-size: 15px;
  `,
};

export const getTextStyle = (variant: Variant) => css`
  ${variantStyles[variant]};
`;

export const Text = styled(BaseText)<Props>`
  ${({variant}) => getTextStyle(variant!)};
`;
