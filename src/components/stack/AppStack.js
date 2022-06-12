import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MovieDetail from '../screens/Detail';
import TabStacks from './TabStacks';
import { Text } from 'native-base';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={TabStacks}
        options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#ffffff',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          id: route.params.id,

          headerTitle: () => (
            <Text fontSize={14} color="blue.400" textAlign="left">
              Back to List
              <Text fontSize={16} color="black" >
                {' '}
                {route.params.title}
              </Text>
            </Text>
          ),
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
