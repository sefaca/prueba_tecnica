import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background};
  padding-top: ${({theme}) => theme.device.safeTop}px;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const LeftAction = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const CenterAction = styled.View``;

export const TitleText = styled(Text).attrs({
  variant: 'title1',
})`
  color: ${({theme}) => theme.colors.white};
`;

export const RightAction = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
