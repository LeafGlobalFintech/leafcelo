import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
    ToastAndroid,
    Text
} from "react-native";
import { LabelInput } from "../../../components/Forms";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/Button";
import DropDownPicker from 'react-native-dropdown-picker';


class Status extends Component {
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
    render() {
        return (
            <BgView>
                <Header.Back title="Status" onBackPress={this.props.navigation.goBack} />
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
                            label="Interest"
                            value={"1000"}
                            editable={false}
                        />
                        <LabelInput
                            label="Loan Balance"
                            value={this.state.amount}
                            editable={false}
                        />
                        <LabelInput
                            label="Guarantee"
                            value={this.state.guarantee}
                            placeholder="Guarantee"
                            editable={false}
                        />
                        <LabelInput
                            label="Due Date"
                            value={"12/12/2020"}
                            editable={false}
                        />
                    
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default Status;