import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MovieScreen from '../screens/MovieScreen';
import SearchScreen from '../screens/SearchScreen';

import { Text } from 'native-base';
import TVShowsScreen from '../screens/TVShowsScreen';

const Tab = createMaterialTopTabNavigator();

const TabStacks = () => (
  <Tab.Navigator initialRouteName="MoviesScreen">
    <Tab.Screen
      name="MoviesScreen"
      component={MovieScreen}
      options={{
        title: () => <Text>Movies</Text>,
      }}
    />
    <Tab.Screen
      name="Search Results"
      component={SearchScreen}
      options={{
        title: () => <Text>Search Results</Text>,
      }}
    />
    <Tab.Screen
      name="TV Shows"
      component={TVShowsScreen}
      options={{
        title: () => <Text>TV Shows</Text>,
      }}
    />
  </Tab.Navigator>
);

export default TabStacks;
