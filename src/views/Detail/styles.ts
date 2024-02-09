import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-bottom: 20px;
`;

export const MainContainer = styled.View`
  padding: 0 20px 70px 20px;
`;

export const TitleCategory = styled(Text).attrs({
  variant: 'title2',
})`
  color: ${({theme}) => theme.colors.softYellow};
  padding: 10px 0 20px 15px;
`;

export const TitleDescrition = styled(Text).attrs({
  variant: 'title4',
})`
  color: ${({theme}) => theme.colors.white};
  padding: 0 0 20px 15px;
`;

export const NameAuthor = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme}) => theme.colors.softWhite};
  padding: 0 15px 15px 15px;
  margin-bottom: 5px;
`;

export const ImageDetail = styled(Image)`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  padding: 0 0 20px 15px;
`;

export const MainDescription = styled(Text).attrs({
  variant: 'body3',
})`
  color: ${({theme}) => theme.colors.white};
  padding: 20px 15px 20px 15px;
`;
