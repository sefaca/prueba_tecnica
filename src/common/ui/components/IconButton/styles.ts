import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 35px;
  border-radius: 20px;
  aspect-ratio: 1;
  background-color: ${({theme: {colors}}) => colors.background};
`;
