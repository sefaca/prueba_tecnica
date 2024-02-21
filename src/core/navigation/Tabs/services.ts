import type {NavigationContainerRef, RouteProp} from '@react-navigation/native';
import type {ScreensParams} from './types';
import {createRef} from 'react';
import {noop} from 'lodash';

const navigationReady = createRef<boolean>() as {
  current?: boolean;
};

export const handleNavigatorReady = () => {
  navigationReady.current = true;
};

export const navigationRef = createRef<NavigationContainerRef<any>>();

const MAX_TRIES = 5;
const RETRY_DELAY_MS = 1000;

const waitForNavigationReady = () =>
  new Promise<void>((resolve, reject) => {
    if (
      navigationReady.current &&
      navigationRef.current &&
      navigationRef.current.isReady()
    ) {
      resolve();
    } else {
      let counter = 0;
      const interval = setInterval(() => {
        if (navigationRef.current && navigationRef.current.isReady()) {
          clearInterval(interval);
          resolve();
        } else {
          counter += 1;
        }

        if (counter === MAX_TRIES) {
          clearInterval(interval);
          reject();
        }
      }, RETRY_DELAY_MS);
    }
  });

export const navigate = <T extends keyof ScreensParams>(
  to: T,
  params?: RouteProp<ScreensParams, T>['params'],
  merge?: boolean,
) => {
  waitForNavigationReady()
    .then(() => {
      navigationRef.current?.navigate({name: to as any, params, merge});
    })
    .catch(noop);
};

export const goBack = () => {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
};
