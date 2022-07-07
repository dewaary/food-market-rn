import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  // const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn')
      console.log('ini time out');
    }, 2000);
    // props.navigation.navigate('SignIn')
  }, [navigation]);

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
    fontFamily: 'Poppins-Medium',
  },
});
