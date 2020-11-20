import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import AppContainer from "./navigation/AppContainer";
import ThemeContextProvider from "./hooks/useTheme";
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import SnackBar from "./components/SnackBar";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#34846b',
    accent: '#34846b',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // console.log(DefaultTheme.colors)
  return (
    <ThemeContextProvider>
      <PaperProvider theme={theme}>
        <AppContainer />
        <SnackBar />
      </PaperProvider>
    </ThemeContextProvider>
  );
};

export default App;
