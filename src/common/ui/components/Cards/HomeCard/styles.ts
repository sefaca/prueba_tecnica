import styled from 'styled-components/native';
import Text from '../../Text';
import {Image} from 'react-native';

export const Container = styled.View`
  width: 170px;
  height: 280px;
  background-color: ${({theme}) => theme.colors.purpleMiddle};
  border-radius: 8px;
  margin-right: 13px;
  margin-bottom: 20px;
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
  padding: 0 15px 5px 15px;
  height: 180px;
`;

export const NameAuthor = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme}) => theme.colors.softWhite};
  padding: 250px 15px 5px 15px;
  margin-bottom: 5px;
  position: absolute;
`;
