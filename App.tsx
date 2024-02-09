import type {FC} from 'react';
import React from 'react';
import ThemeProvider from './src/common/ui/theme/provider';
import Home from './src/views/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StatusBar from './src/common/ui/components/StatusBar';

const App: FC = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <StatusBar />
      <Home />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
