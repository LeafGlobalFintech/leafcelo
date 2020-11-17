import React, { useContext, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { Paragraph, Lead } from "../Typography";
import Icon from "react-native-vector-icons/FontAwesome5";

import { ThemeContext } from "../../hooks/useTheme";

export const TxFeedCard = ({
  amount,
  name,
  image,
  currency,
  amountEquivalent,
  ...props
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View
      style={{
        backgroundColor: theme.secondary,
        padding: 10,
        width: "47%",
        marginTop: "5%",
        marginLeft: 10,
        marginRight: 1,
        borderRadius: 10,
      }}
      {...props}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={image}
          style={{ borderRadius: 50, width: 70, height: 70 }}
        />
      </View>
      <Paragraph style={{ fontSize: 15 }}>
        {name} sent &#36;{amount} in {currency}
      </Paragraph>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Lead>+ &#36;{amount}</Lead>
        <Paragraph style={{ fontSize: 12 }}>{amountEquivalent}</Paragraph>
      </View>
    </View>
  );
};


export const NotificationCard = ({
  value,
  image,
  notificationInfo,
  ...props
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View
      style={{
        backgroundColor: theme.secondaryCard,
        padding: 10,
        width: "45%",
        marginTop: "10%",
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Image
        source={image}
        style={{ borderRadius: 50, width: 70, height: 70 }}
      />

      <Lead style={{ fontSize: 15, textAlign: "center" }}>
        {notificationInfo}
      </Lead>
      <Paragraph style={{ fontSize: 14 }}>{value}</Paragraph>
    </View>
  );
};



export const SettingsItemCard = ({ value, onPress, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.secondaryCard,
        padding: 10,
        width: "45%",
        marginTop: "4%",
        marginLeft: 15,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Paragraph style={{ textAlign: "center" }}>{value}</Paragraph>
    </TouchableOpacity>
  );
};

export const WalletCard = ({ address, cardName, loanAmount, balance, loan, status, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View style={{
      position: 'relative',
      backgroundColor: theme.primary,
      width: '98%',
      height: 220,
      borderRadius: 25,
      paddingHorizontal: 30,
      paddingVertical: 20,
      marginTop: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      // alignItems: 'center',
      // justifyContent: 'space-between',
      shadowRadius: 13.35,
    }} {...props}>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
        <View>
          <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '500', fontSize: 40 }}>
            ${loanAmount}
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View style={{
            width: 70, height: 70, shadowColor: "#3FAC9D",

            alignItems: "center",
            shadowOffset: { width: 0, height: 12, },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          }}>
            <TouchableOpacity onPress={loan} style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5, backgroundColor: theme.primary, marginBottom: 10, borderRadius: 70 / 2, height: '100%', width: 70, justifyContent: "center", alignItems: "center",
            }}>
              <Icon name="money-check-alt" color={"#fff"} size={28} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>Loan</Text>
          </View>
          <View style={{
            borderRadius: 70 / 2, width: 70, height: 70, shadowColor: "#3FAC9D",
            shadowOffset: { width: 0, height: 12, },
            alignItems: "center",
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          }}>
            <TouchableOpacity onPress={status} style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5, backgroundColor: theme.primary, marginBottom: 10, borderRadius: 70 / 2, height: '100%', width: 70, justifyContent: "center", alignItems: "center",
            }}>
              <Icon name="money-check" color={"#fff"} size={28} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>Status</Text>
          </View>
          <View style={{
            borderRadius: 70 / 2, width: 70, height: 70, shadowColor: "#3FAC9D",
            shadowOffset: { width: 0, height: 12, },
            alignItems: "center",
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          }}>
            <TouchableOpacity onPress={balance} style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5, backgroundColor: theme.primary, marginBottom: 10, borderRadius: 70 / 2, height: '100%', width: 70, justifyContent: "center", alignItems: "center",
            }}>
              <Icon name="landmark" color={"#fff"} size={28} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>Balance</Text>
          </View>
        </View>
      </View>
    </View >
  );
};
export const BalanceCard = ({ loanAmount, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View style={{
      position: 'relative',
      backgroundColor: theme.primary,
      width: '98%',
      height: 180,
      borderRadius: 25,
      paddingHorizontal: 30,
      paddingVertical: 20,
      marginTop: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
       alignItems: 'center',
      
      shadowRadius: 13.35,
    }} {...props}>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <View>
          <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '500', fontSize: 40 }}>
            ${loanAmount}
          </Text>
          <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '100', marginTop: 10, fontSize: 30 }}>
            Wallet Balance
          </Text>
        </View>
      </View>
    </View >
  );
};

export const ComingSoonCard = ({ ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000
    }).start();
  })


  return (
    <View
      style={{
        backgroundColor: theme.primary,
        height: 220,
        borderRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginTop: 30,
        alignItems: 'center',
        // justifyContent: 'space-between',
        shadowColor: '#56D5D0',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 13.35,
      }}
      {...props}
    >

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

        <Animated.View
          style={[
            {
              opacity: fadeAnim // Bind opacity to animated value
            }
          ]}
        >
          <Paragraph
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'white'
            }}>
            COMING SOON...
          </Paragraph>
        </Animated.View>
      </View>
    </View>
  );
};