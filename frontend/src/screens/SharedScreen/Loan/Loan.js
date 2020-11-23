import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    
    ToastAndroid,
    Text
} from "react-native";
import { LabelInput } from "../../../components/Forms";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/Button";
import AsyncStorage from "@react-native-community/async-storage";


class Loan extends Component {
    state = {
        guarantee: "",
        sizeOfLoan: null,
        amount: ""
    }
    async componentDidMount() {
        let loanAmount = await AsyncStorage.getItem("loanAmount")
        let guarantee = await AsyncStorage.getItem("guarantee")
        await this.setState({ amount: loanAmount, guarantee })
    }
    onApply = () => {
        this.props.navigation.navigate("balance")
    }
    render() {
        console.log("sizeOfLoan")
        return (
            <BgView>
                <Header.Back title="Loan" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <KeyboardAvoidingView>
                        <LabelInput
                            label="Term"
                            value={"Short Term"}
                            editable={false}
                        />
                        <LabelInput
                            label="Amount"
                            value={this.state.amount}
                            placeholder="Loan Amount"
                            editable={false}
                        />
                        <LabelInput
                            label="Guarantee"
                            value={this.state.guarantee}
                            placeholder="Guarantee"
                            editable={false}
                        />
                        <LabelInput
                            label="Score"
                            value={"15"}
                            editable={false}
                        />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Duration</Text>
                            <Text>Personal Loan : 1 week</Text>
                            <Text>Business : 1 month</Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10%",
                                marginBottom: "10%",
                            }}
                        >
                            <Button onPress={this.onApply} text="Apply" />
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default Loan;