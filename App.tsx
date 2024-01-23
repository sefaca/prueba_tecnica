import type {FC} from 'react';
import React from 'react';
import ThemeProvider from './src/common/ui/theme/provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/views/Home/index.tsx';

const App: FC = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
