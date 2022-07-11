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
import {Rating} from '..';
import ItemListFood from '../ItemListFood';

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

const NewTaste = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy3} />
    </View>
  );
};

const Popular = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy3} />
    </View>
  );
};

const Recommended = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy3} />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Teste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
