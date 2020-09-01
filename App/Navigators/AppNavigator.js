import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import UsersListScreen from 'App/Containers/UsersList/UsersListScreen'
import UserDetailsScreen from 'App/Containers/UserDetails/UserDetailsScreen'
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */


const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator()
const JenzyStack = () => (
  <Stack.Navigator initialRouteName="UsersList">
    <Stack.Screen
        name="UsersList"
        component={UsersListScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ headerStyleInterpolator: forFade }}
      />
  </Stack.Navigator>
)

export default JenzyStack
