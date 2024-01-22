import type {FC} from 'react';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from './src/common/ui/theme/colors.ts';
import ThemeProvider from './src/common/ui/theme/provider';
// import FilterMenu from './src/common/ui/components/FilterMenu/FilterMenu.tsx';
import Home from './src/views/Home/index.tsx';

const App: FC = () => (
      <ThemeProvider>
        <StatusBar />
        <Home />
      </ThemeProvider>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     color: colors.text,
//   },

export default App;
