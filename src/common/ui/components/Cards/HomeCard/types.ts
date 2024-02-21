import type {StyleProp, ViewStyle} from 'react-native';
import type {Lesson} from '../../../../../views/Home/model';

export type Props = Lesson & {
  onPress: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};
