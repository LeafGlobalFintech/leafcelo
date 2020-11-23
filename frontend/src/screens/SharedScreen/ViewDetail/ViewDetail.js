import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,

    ToastAndroid,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import { LabelInput } from "../../../components/Forms";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/Button";
import { FAB } from 'react-native-paper';
import Utils from '../../../services/Utils';
import AsyncStorage from "@react-native-community/async-storage";


class ViewDetail extends Component {
    state = {
        guarantee: "",
        sizeOfLoan: null,
        amount: "",
        status: "Pending"
    }
    async componentDidMount() {
        let loanAmount = await AsyncStorage.getItem("loanAmount")
        let guarantee = await AsyncStorage.getItem("guarantee")
        await this.setState({ amount: loanAmount, guarantee })
    }
    payOffLoan = async () => {
        Alert.alert(
            'Are you sure you want to pay off loan?',
            '',
            [
                {
                    text: 'No',
                    onPress: () => console.log('User canceled payoff'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: async () => {
                        await AsyncStorage.setItem("loanAmount", "0");
                        await AsyncStorage.setItem("guarantee", "0");
                        Utils.navigate("home");
                    }
                },
            ],
            { cancelable: false }
        );
    }
    render() {
        return (
            <BgView>
                <Header.Back title="View Detail" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <KeyboardAvoidingView>
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
                            label="Status"
                            value={this.state.status}
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
                <FAB
                    style={styles.fab}
                    label="Pay off loan"
                    onPress={this.payOffLoan}
                />
            </BgView>
        );
    }
}

export default ViewDetail;

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        left: 0,
        bottom: 0,
    },
})