import React, { useContext, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  AsyncStorage,
  Text,
} from "react-native";
import { BgView, Header } from "../../components/Layouts";
import { FAB, Card, useTheme, Button, Title } from 'react-native-paper';
import { StyleSheet } from "react-native";

const Home = ({ navigation, route }) => {
  const [loanAmount, setLoanAmount] = useState(0)
  const applyForLoan = () => {
    navigation.navigate("applyForLoan")
  }
  const viewDetail = () => {
    navigation.navigate("viewDetail")
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      AsyncStorage.getItem("loanAmount").then(amount => {
        setLoanAmount(amount || 0)
      })
    });
    return unsubscribe;
  }, [navigation])

  const { colors } = useTheme();

  return (
    <BgView>
      <Header.WithOut title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 5, marginTop: 15 }}>
          <Card elevation={5} style={{ borderRadius: 7, backgroundColor: colors.primary }}>
            <Card.Content>
              <View style={{ padding: 10 }}>
                <Title style={{ color: colors.surface, fontSize: 30, alignSelf: 'center' }}>
                  ${loanAmount}
                </Title>
                <Title style={{ marginTop: 15, color: colors.surface, fontSize: 25, alignSelf: 'center' }}>
                  Balance
                </Title>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={{ padding: 5, marginTop: 15 }}>
          <Card elevation={5} style={{ borderRadius: 7 }}>
            <Card.Content>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, color: 'grey', fontWeight: "500" }}>Due Date</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>16/11/2020</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 15, color: 'grey', fontWeight: "500" }}>Outstanding Balance</Text>
                  </View>
                  <View style={{ flex: 2, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>$100</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 15, color: 'grey', fontWeight: "500" }}>Interest paid</Text>
                  </View>
                  <View style={{ flex: 2, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>$10</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 15, color: 'grey', fontWeight: "500" }}>Duration</Text>
                  </View>
                  <View style={{ flex: 2, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>1 Month</Text>
                  </View>
                </View>
              </View>
            </Card.Content>
            <Card.Actions style={{}}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: 3 }}>
                  <Button mode="contained">Payoff Loan</Button>
                </View>
                <View style={{ flex: 1, marginLeft: 3 }}>
                  <Button mode="contained" onPress={viewDetail}>View Detail</Button>
                </View>
              </View>
            </Card.Actions>
          </Card>
        </View>

      </ScrollView>
      <FAB
        disabled={loanAmount > 0 ? true : false}
        style={styles.fab}
        label="Apply For Loan"
        icon="file-check"
        onPress={applyForLoan}
      />
    </BgView>
  );
};

export default Home;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,

    bottom: 0,
  },
})