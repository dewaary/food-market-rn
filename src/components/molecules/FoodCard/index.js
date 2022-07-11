import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, IcStarOff, IcStarOn} from '../../../assets';
import { Rating } from '..';

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageFoodCard}/>
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healty</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: 0.5,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  imageFoodCard: {
    width: 200,
    height: 140,
    resizeMode: 'cover'
  },
  content: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
