import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import AppContainer from "./navigation/AppContainer";
import ThemeContextProvider from "./hooks/useTheme";


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ThemeContextProvider>

        <AppContainer />

    </ThemeContextProvider>
  );
};

export default App;
