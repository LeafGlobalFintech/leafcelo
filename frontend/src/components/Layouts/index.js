import React, { useContext } from "react";
import t from "prop-types";
import { Image, StatusBar, SafeAreaView, View, Platform } from "react-native";
import { ThemeContext } from "../../hooks/useTheme";
import { Header as Header_ } from "react-native-elements";

export const Header = (props) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <Header_
      {...props}
      containerStyle={{
        backgroundColor: theme.background,
        paddingHorizontal: 10,
        height: 60,
        paddingTop: 0,
        ...props.containerStyle,
      }}
    />
  );
};
export const SecondaryHeader = (props) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <Header_
      {...props}
      containerStyle={{
        backgroundColor: theme.secondaryBackground,
        paddingHorizontal: 10,
        height: 60,
        paddingTop: 0,
        ...props.containerStyle,
      }}
    />
  );
};
export const HeaderWithBack = ({ title, onBackPress, containerStyle }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <React.Fragment>
      {Platform.OS !== "ios" ? <View style={{ marginTop: "10%" }} /> : null}
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.basic,
          onPress: onBackPress,
        }}
        centerComponent={{
          text: title,
          style: {
            color: theme.basic,
            fontWeight: "600",
            fontFamily: "Rubik-Regular",
            fontSize: 18,
          },
        }}
        containerStyle={containerStyle}
      />
    </React.Fragment>
  );
};
HeaderWithBack.propTypes = {
  title: t.string,
  containerStyle: t.object,
  onBackPress: t.func.isRequired,
};

Header.Back = HeaderWithBack;

export const HeaderWithOutBack = ({ title, onBackPress, containerStyle }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <React.Fragment>
      {Platform.OS !== "ios" ? <View style={{ marginTop: "10%" }} /> : null}
      <Header
        centerComponent={{
          text: title,
          style: {
            color: theme.basic,
            fontWeight: "600",
            fontFamily: "Rubik-Regular",
            fontSize: 18,
          },
        }}
        containerStyle={containerStyle}
      />
    </React.Fragment>
  );
};

HeaderWithOutBack.propTypes = {
  title: t.string,
  containerStyle: t.object,
};

Header.WithOut = HeaderWithOutBack;

export const SecondaryHeaderWithBack = ({
  title,
  onBackPress,
  containerStyle,
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <React.Fragment>
      {Platform.OS !== "ios" ? <View style={{ marginTop: "10%" }} /> : null}
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.basic,
          onPress: onBackPress,
        }}
        centerComponent={{
          text: title,
          style: {
            color: theme.basic,
            fontWeight: "600",
            fontFamily: "Rubik-Regular",
            fontSize: 18,
          },
        }}
        containerStyle={{ backgroundColor: theme.secondaryBackground }}
      />
    </React.Fragment>
  );
};

SecondaryHeaderWithBack.propTypes = {
  title: t.string,
  containerStyle: t.object,
  onBackPress: t.func.isRequired,
};

SecondaryHeader.Back = SecondaryHeaderWithBack;

export const BgView = ({ children, style }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
        ...style,
        paddingHorizontal: "5%",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      {children}
    </SafeAreaView>
  );
};
BgView.propTypes = {
  children: t.node.isRequired,
};

export const SecondaryBgView = ({ children, style }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.secondaryBackground,
        alignItems: "center",
        ...style,
        paddingHorizontal: "5%",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      {children}
    </SafeAreaView>
  );
};
BgView.propTypes = {
  children: t.node.isRequired,
};
