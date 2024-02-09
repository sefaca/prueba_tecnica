import type {FC} from 'react';
import React from 'react';
import ThemeProvider from './src/common/ui/theme/provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StatusBar from './src/common/ui/components/StatusBar';
import MainNavigation from './src/core/navigation/Tabs';

const App: FC = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <StatusBar />
      <MainNavigation />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
