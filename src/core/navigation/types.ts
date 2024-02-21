import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

type DetailsParams = {
  id: string;
};

export type ScreensParams = {
  Home: undefined;
  Detail: DetailsParams;
};

export type MainStackScreenProps<ScreenName extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, ScreenName>;

export type ScreenName = keyof ScreensParams;
