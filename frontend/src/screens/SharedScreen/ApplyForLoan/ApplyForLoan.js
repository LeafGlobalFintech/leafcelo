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
// import Button from "../../../components/Button";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-paper';
import AsyncStorage from "@react-native-community/async-storage";

class ApplyForLoan extends Component {
    state = {
        guarantor: "",
        loanType: null,
        amount: ""
    }
    onReview = () => {
        if (!this.state.loanType)
            return alert("Please select size of the loan.")
        if (!this.state.amount)
            return alert("Please enter your loan amount.")
        if (["personal", "home utility", "family emergency", "livestock"].includes(this.state.loanType)) {
            if (!(this.state.amount >= 10 && this.state.amount <= 25)) {
                return alert("Amount between 10 to 25 cUSD")
            }
        }
        else if (["micro business", "small business"].includes(this.state.loanType)) {
            if (!(this.state.amount >= 25 && this.state.amount <= 50)) {
                return alert("Amount between 25 to 50 cUSD")
            }
        }
        AsyncStorage.setItem("loanAmount", this.state.amount)
        AsyncStorage.setItem("guarantor", this.state.guarantor)
        AsyncStorage.setItem("loanType", this.state.loanType)

        this.props.navigation.navigate("review")
    }
    render() {
        console.log("loanType")
        return (
            <BgView>
                <Header.Back title="Apply Loan" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <KeyboardAvoidingView>
                        <View style={{ marginBottom: 15, marginTop: 15 }}>

                            <DropDownPicker
                                items={[
                                    { label: 'Personal', value: 'personal' },
                                    { label: 'Home Utility', value: 'home utility' },
                                    { label: 'Family Emergency', value: 'family emergency' },
                                    { label: 'Livestock', value: 'livestock' },
                                    { label: 'Micro Business', value: 'micro business' },
                                    { label: 'Small Business', value: 'small business' },
                                ]}
                                defaultValue={this.state.loanType}
                                containerStyle={{ height: 50 }}
                                style={{ backgroundColor: '#fafafa' }}
                                placeholder="Loan Type"
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => {
                                    this.setState({ loanType: item.value })
                                }}
                            />
                        </View>
                        {this.state.loanType !== null &&
                            <View style={{ paddingVertical: 20 }}>
                                <Text style={{ alignSelf: 'center', color: "darkblue", fontWeight: 'bold' }}>
                                    {["personal", "home utility", "family emergency", "livestock"].includes(this.state.loanType)
                                        ?
                                        "Your Loan Amount Rang 10 to 25 cUSD"
                                        :
                                        "Your Loan Amount Rang 25 to 50 cUSD"
                                    }
                                </Text>
                            </View>
                        }
                        <LabelInput
                            label="Loan Amount"
                            placeholder="Enter Your Loan Amount"
                            value={this.state.amount}
                            keyboardType="numeric"
                            onChangeText={(value) => this.setState({ amount: value })}
                        />
                        <LabelInput
                            label="Guarantor"
                            placeholder="Guarantor"
                            value={this.state.guarantor}
                            onChangeText={(value) => this.setState({ guarantor: value })}
                        />

                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10%",
                                marginBottom: "10%",
                            }}

                        >
                            <Button onPress={this.onReview} mode="contained">Review</Button>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default ApplyForLoan;