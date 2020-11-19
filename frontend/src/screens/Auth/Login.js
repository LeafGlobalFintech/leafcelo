import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { BgView } from "../../components/Layouts";
import Button from "../../components/Button";
import { LabelInput } from "../../components/Forms";
import api from "../../services/ApiServices";
import Loader from "../../components/Loader";


class Login extends Component {
  state = {
    username: "",
    pin: "",
    isLoading: false
  }
  onLogin = async () => {
    try {
      if (!this.state.username)
        return alert("Username must be required!");
      if (!this.state.pin)
        return alert("Pin must be required!");
      this.setState({ isLoading: true })
      let res = await api.login(this.state.username, this.state.pin)
      console.log(res, "res")
      this.props.navigation.navigate("app", { screen: "home" });
    }
    catch (ex) {
      console.log(ex)
    }
    finally {
      this.setState({ isLoading: false })
    }
  }
  onRegister = () => {
    this.props.navigation.navigate("register");
  }
  render() {
    return (
      <BgView>
        <KeyboardAvoidingView>
          {this.state.isLoading &&
            <Loader isLoading={this.state.isLoading} />
          }
          <View style={{ marginTop: "20%", alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Login</Text>
          </View>
          <View style={{ marginTop: "20%" }}>

            <LabelInput
              label="Username"
              placeholder="Enter your username"
              value={this.state.username}
              onChangeText={(value) => this.setState({ username: value })}
            />
            <LabelInput
              label="Pin"
              keyboardType="numeric"
              maxLength={4}
              value={this.state.pin}
              onChangeText={(value) => this.setState({ pin: value })}
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
            <Button text="Sign In" onPress={this.onLogin} />
          </View>

          {/* <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Button text="Register" onPress={onRegister} />
        </View> */}
        </KeyboardAvoidingView>
      </BgView>
    );
  }
}

export default Login;