import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';

export const TitleText = styled(Text).attrs({
  variant: 'title1',
})`
  color: ${({theme}) => theme.colors.primary};
`;
