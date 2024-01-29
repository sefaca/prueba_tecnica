import styled from 'styled-components/native';
import Text from '../../Text';
import {Image} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  width: 48%;
  background-color: ${({theme}) => theme.colors.purpleMiddle};
  border-radius: 8px;
  margin-right: 13px;
`;

export const ItemContainer = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const ImageCardHorizontal = styled(Image)`
  width: 100%;
  height: 120px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const TitleCategory = styled(Text).attrs({
  variant: 'title2',
})`
  color: ${({theme}) => theme.colors.softYellow};
  padding: 10px 15px 5px 15px;
`;

export const TextDescrition = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme}) => theme.colors.white};
  padding: 0px 15px 5px 15px;
`;

export const NameAuthor = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme}) => theme.colors.softWhite};
  padding: 0px 15px 5px 15px;
  margin-bottom: 5px;
`;

export const CardsSeparator = styled.View`
  height: 10px;
  width: 100%;
`;
