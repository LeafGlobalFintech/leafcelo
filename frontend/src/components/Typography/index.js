import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "../../hooks/useTheme";

export const Paragraph = ({ children, style }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Rubik-Regular",
        color: theme.basic,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const Lead = ({ children, style }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontFamily: "Rubik-Regular",
        color: theme.basic,
        fontSize: 16,
        lineHeight: 26,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
