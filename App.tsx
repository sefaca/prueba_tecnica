import type {FC} from 'react';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import ThemeProvider from './src/common/ui/theme/provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StatusBar from './src/common/ui/components/StatusBar';
import MainNavigation from './src/core/navigation/Tabs';
import apolloClient from './src/core/apollo/client';

const App: FC = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <ApolloProvider client={apolloClient}>
        <StatusBar />
        <MainNavigation />
      </ApolloProvider>
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
