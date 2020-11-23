import React, { useContext } from "react";
import t from "prop-types";
import { StatusBar, SafeAreaView, View, Platform, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../hooks/useTheme";
import { Header as Header_ } from "react-native-elements";
import { Avatar, Menu } from "react-native-paper";
import auth from "../../services/AuthService";

export const Header = (props) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const user = global.user;
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const logout = async () => {
    await auth.logout()
    closeMenu();
  }
  return (
    <React.Fragment>
      <Header_
        {...props}
        rightComponent={global.user ?
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <Menu visible={visible} onDismiss={closeMenu} anchor={<TouchableOpacity onPress={openMenu}>
              <Avatar.Text size={40} label={`${user.username[0]}${user.username[1]}`.toUpperCase()} />
            </TouchableOpacity>}>
              <Menu.Item onPress={() => { }} title="Profile" />
              <Menu.Item
                onPress={logout}
                title="Logout"
              />
            </Menu>
          </View>
          : {}}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 5,
        }}
        containerStyle={{
          backgroundColor: theme.background,
          // paddingHorizontal: 10,
          height: 60,
          paddingTop: 0,
          fontWeight: 'bold',
          ...props.containerStyle,

        }}
      />

    </React.Fragment>
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
            fontWeight: "bold",
            fontFamily: "Rubik-Regular",
            fontSize: 20,
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
            fontWeight: "bold",
            fontFamily: "Rubik-Regular",
            fontSize: 20,
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
