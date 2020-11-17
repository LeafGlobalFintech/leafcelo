//@@Dev this component is the entry point of navigation for the application
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";
const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="auth" component={AuthNavigation} />
        <Stack.Screen name="app" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
