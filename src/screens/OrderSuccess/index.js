import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILSuccessOrder1} from '../../assets/';
import {Button, Gap} from '../../components';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILSuccessOrder1 />
      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.btnContainer}>
        <Button
          text={'Order Other Foods'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={24} />
      <View style={styles.btnContainer}>
        <Button
          text={'View My Order'}
          onPress={() => navigation.replace('MainApp')}
          color="#8D92A3"
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
