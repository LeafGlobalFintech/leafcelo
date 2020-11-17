import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../hooks/useTheme";

const Button = ({ onPress, text, style, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.primary,
        width: "75%",
        padding: 15,
        borderRadius: 5,
        ...style,
      }}
      onPress={onPress}
      {...props}
    >
      <Text
        style={{
          fontSize: 18,
          lineHeight: 26,
          fontFamily: "Rubik-Regular",
          color: theme.white,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const WhiteButton = ({ onPress, text, style, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.background,
        width: "75%",
        padding: 15,
        borderRadius: 5,
        ...style,
      }}
      onPress={onPress}
      {...props}
    >
      <Text
        style={{
          fontSize: 18,
          lineHeight: 26,
          fontFamily: "Rubik-Regular",
          color: theme.danger,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.Cancel = WhiteButton;
export default Button;
