import type {StyleProp, ViewStyle} from 'react-native';
import type {Lesson} from '../../../../../views/Home/modal';

export type Props = Lesson & {
  onPress: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};
