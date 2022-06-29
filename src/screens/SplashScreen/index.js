import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.TextFood}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
  },
  TextFood: {
      fontSize: 32,
      color: '#020202',
      marginTop: 38,
      fontFamily: 'Poppins-Medium'
  }
});
