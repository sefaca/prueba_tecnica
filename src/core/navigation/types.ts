import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Lesson} from '../../views/Home/model';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

type DetailsParams = {
  id: string;
  lesson: Lesson;
};

export type ScreensParams = {
  Home: undefined;
  Detail: DetailsParams;
};

export type MainStackScreenProps<ScreenName extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, ScreenName>;

export type ScreenName = keyof ScreensParams;
