import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacityBase } from "react-native";
import { BgView } from "../../components/Layouts";
import Button from "../../components/Button";
import { LabelInput } from "../../components/Forms";
import api from "../../services/ApiServices";
import Loader from "../../components/Loader";


class Login extends Component {
  state = {
    username: "",
    pin: "",
    isLoading: false,
    showSnackBar: false
  }
  onLogin = async () => {
    try {
      if (!this.state.username)
        return global.showSnackbar("Username must be required!", "red");

      if (!this.state.pin)
        return global.showSnackbar("Pin must be required!", "red");

      this.setState({ isLoading: true })

      let res = await api.login(this.state.username, this.state.pin)
       if (!res.status) {
        return global.showSnackbar("User Not Fount", "red");
      }
      global.showSnackbar("Login Successfully!", "green");
      this.setState({ username: "", pin: '' })
      this.props.navigation.navigate("app", { screen: "home" });
    }
    catch (ex) {
      console.log(ex)
      console.log(ex, "eRROR")
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