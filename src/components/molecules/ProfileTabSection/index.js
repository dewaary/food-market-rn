import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {ItemListMenu, Rating} from '..';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#020202', height: 3}}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListMenu text={'Edit Profile'} />
      <ItemListMenu text={'Home Address'} />
      <ItemListMenu text={'Security'} />
      <ItemListMenu text={'Payments'} />
    </View>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListMenu text={'Rate App'} />
      <ItemListMenu text={'Help Center'} />
      <ItemListMenu text={'Privacy & Policy'} />
      <ItemListMenu text={'Term & Conditions'} />
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
});

const ProfileTabSection = () => {
  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({});
