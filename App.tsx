import type {FC} from 'react';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from './src/common/ui/theme/colors.ts';
import ThemeProvider from './src/common/ui/theme/provider';
import Home from './src/views/Home/index.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StatusBar from './src/common/ui/components/StatusBar';

const App: FC = () => (
  <SafeAreaProvider>
    <ThemeProvider >
      <StatusBar />
      <Home/>
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
