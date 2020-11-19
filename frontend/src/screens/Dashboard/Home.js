import React, { useContext, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  AsyncStorage,
  Text,
} from "react-native";
import { BgView, Header } from "../../components/Layouts";
import { ThemeContext } from "../../hooks/useTheme";
import { BalanceCard } from "../../components/cards";
import Button from "../../components/Button";


const Home = ({ navigation, route }) => {

  const [loanAmount, setLoanAmount] = useState(0)

  const { isLightTheme, lightTheme, darkTheme } = useContext(
    ThemeContext
  );
  const theme = isLightTheme ? lightTheme : darkTheme;

  const applyForLoan = () => {
    navigation.navigate("applyForLoan")
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      AsyncStorage.getItem("loanAmount").then(amount => {
        setLoanAmount(amount || 0)
      })
    });

    return unsubscribe;
  }, [navigation])
  return (
    <BgView>
      <Header.WithOut title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BalanceCard loanAmount={loanAmount} />
        </View>
        <View>
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, color: 'grey', fontWeight: "500" }}>Due Date</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, color: theme.primary, fontWeight: "500" }}>16/11/2020</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 20, color: 'grey', fontWeight: "500" }}>Outstanding Balance</Text>
            </View>
            <View style={{ flex: 2, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, color: theme.primary, fontWeight: "500" }}>$100</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 20, color: 'grey', fontWeight: "500" }}>Interest paid</Text>
            </View>
            <View style={{ flex: 2, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, color: theme.primary, fontWeight: "500" }}>$10</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 20, color: 'grey', fontWeight: "500" }}>Duration</Text>
            </View>
            <View style={{ flex: 2, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, color: theme.primary, fontWeight: "500" }}>1 Month</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "20%",
          }}
        >
          <Button text="Apply For Loan" onPress={applyForLoan} />
        </View>
      </ScrollView>
    </BgView>
  );
};

export default Home;
