//@@Dev this component handles navigation for authentication
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Dashboard/Home";
import ApplyForLoan from "../screens/SharedScreen/ApplyForLoan/ApplyForLoan";
import Review from "../screens/SharedScreen/Review/Review";
import Balance from "../screens/SharedScreen/Balance/Balance";
import Status from "../screens/SharedScreen/Status/Status";
import Loan from "../screens/SharedScreen/Loan/Loan";
import ViewDetail from "../screens/SharedScreen/ViewDetail/ViewDetail";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="applyForLoan" component={ApplyForLoan} />
      <Stack.Screen name="review" component={Review} />
      <Stack.Screen name="balance" component={Balance} />
      <Stack.Screen name="status" component={Status} />
      <Stack.Screen name="loan" component={Loan} />
      <Stack.Screen name="viewDetail" component={ViewDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
