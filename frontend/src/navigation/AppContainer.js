//@@Dev this component is the entry point of navigation for the application
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";
import auth from "../services/AuthService";

const Stack = createStackNavigator();
global.navigationRef = React.createRef();

class AppContainer extends React.Component {
  state = {
    token: undefined
  }

  async componentDidMount() {
    let token = await auth.getToken();
    global.userData = await auth.getUserData();
    this.setState({ token });
  }

  render() {
    if (this.state.token === undefined) { // Do not render anything without deciding is user logged in or not. 
      return null;
    }

    return (
      <NavigationContainer ref={global.navigationRef}>
        <Stack.Navigator
          initialRouteName={this.state.token ? "app" : "auth"}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="auth" component={AuthNavigation} />
          <Stack.Screen name="app" component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default AppContainer;
