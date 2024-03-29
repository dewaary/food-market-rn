import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcButtonMin, IcButtonPlus} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>1</Text>
      <TouchableOpacity>
        <IcButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
