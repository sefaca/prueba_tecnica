import styled from 'styled-components/native';
import Text from '../../Text';
import {Image} from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.purpleMiddle};
  border-radius: 8px;
  margin-bottom: 10px;
  padding-right: 10px;
`;

export const ImageCardHorizontal = styled(Image)`
  width: 110px;
  height: 110px;
  border-radius: 8px;
  margin: 10px;
`;

export const ContainerData = styled.View`
  height: 110px;
  margin-right: 20px;
`;

export const TitleCategory = styled(Text).attrs({
  variant: 'title2',
})`
  color: ${({theme}) => theme.colors.softYellow};
  padding: 10px 0 5px 0;
`;

export const TextDescrition = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme}) => theme.colors.white};
  padding: 0 5px 0 0;
  width: 220px;
  line-height: 30px;
`;

export const NameAuthor = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme}) => theme.colors.softWhite};
  padding: 103px 15px 0 0;
  position: absolute;
`;
