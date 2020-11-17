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
import { BalanceCard } from '../../../components/cards';


class Balance extends Component {
    state = {
        guarantee: "",
        sizeOfLoan: null,
        amount: ""
    }
    async componentDidMount() {
        let amount = await AsyncStorage.getItem("loanAmount")
        console.log(amount, "amount")
        this.setState({ amount: amount || 0 })
    }
    render() {
        console.log(this.state.amount)
        return (
            <BgView>
                <Header.Back title="Balance" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <View>
                        <BalanceCard loanAmount={this.state.amount} />
                    </View>
                </ScrollView>
            </BgView>
        );
    }
}

export default Balance;