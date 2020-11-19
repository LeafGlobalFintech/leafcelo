import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { BgView } from "../../../components/Layouts";
import Button from "../../../components/Button";
import { LabelInput } from "../../../components/Forms";

const Register = ({ navigation }) => {
  const onLogin = () => {

  }
  const onRegister = () => {
    navigation.navigate("mnemonic");
  }

  return (
    <BgView>
      <KeyboardAvoidingView>
        <View style={{ marginTop: "20%", alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
            Register
          </Text>
        </View>
        <View style={{ marginTop: "20%" }}>

          <LabelInput
            label="User Id"
            placeholder="Enter your user id"
          // value={""}
          // onChangeText={(value) => {
          //   console.log(value)

          // }}
          />
          <LabelInput
            label="Pin"
            keyboardType="numeric"
            maxLength={4}
            placeholder="Enter your 4 Digit pin"
          // value={""}
          // onChangeText={(value) => {
          //   console.log(value)

          // }}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20%",
          }}
        >
          <Button text="Submit" onPress={onLogin} />
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Button text="Login" onPress={onRegister} />
        </View>
      </KeyboardAvoidingView>
    </BgView>
  );
};

export default Register;
