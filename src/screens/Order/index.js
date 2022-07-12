import {View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {Button, EmptyOrder, Gap, Header, OrderTabSection} from '../../components';
import {ILOrderEmpty} from '../../assets';

const Order = ({navigation}) => {
  const [isEmpty] = useState(false)
  return (
    <View style={styles.page}>
      {isEmpty ? (<EmptyOrder />) : (
      <View style={styles.content}>
        <Header title={"Yours Orders"} subTitle={"Wait for the best meal"}/>
        <View style={styles.tabContainer}>
          <OrderTabSection />
        </View>
      </View> )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24
  }
});
