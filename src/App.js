import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { SplashScreen } from './screens';

const App = () => {
  return (
    <SplashScreen />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
