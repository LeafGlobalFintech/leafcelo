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
// import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-paper';
import AsyncStorage from "@react-native-community/async-storage";
import Loader from '../../../components/Loader';
import api from '../../../services/ApiServices';
import Utils from '../../../services/Utils';
import auth from '../../../services/AuthService';


class Review extends Component {
    state = {
        guarantor: "",
        loanType: null,
        amount: "",
        isLoading: false
    }
    async componentDidMount() {
        let loanAmount = await AsyncStorage.getItem("loanAmount")
        let guarantor = await AsyncStorage.getItem("guarantor")
        let loanType = await AsyncStorage.getItem("loanType")
        await this.setState({ amount: loanAmount, guarantor, loanType })
    }
    onApply = async () => {
        try {
            this.setState({ isLoading: true })
            let res = await api.applyForLoan(this.state.loanAmount, 0, "Pending", "")
            console.log(res)
            if (!res.status) {
                return global.showSnackbar("Your loan Request failed please. Try again!", "red");
            }
            await global.showSnackbar("Your loan sent successfully Now You can see in dashboard", "green");
            await auth.setUserData(res.data)
            Utils.navigate("home")
        }
        catch (ex) {
            global.showSnackbar("Error Occurred While requesting your loan", "red");
        }
        finally {
            this.setState({ isLoading: false })
        }
        this.props.navigation.navigate("home")
    }
    render() {
        console.log("loanType")
        return (
            <BgView>
                <Header.Back title="Review" onBackPress={this.props.navigation.goBack} />
                {this.state.isLoading &&
                    <Loader isLoading={this.state.isLoading} />
                }
                <ScrollView>
                    <KeyboardAvoidingView>
                        <LabelInput
                            label="Term"
                            value={this.state.loanType}
                            editable={false}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, paddingRight: 3 }}>
                                <LabelInput
                                    label="Amount"
                                    value={this.state.amount}
                                    placeholder="Loan Amount"
                                    editable={false}
                                />
                            </View>
                            <View style={{ flex: 1, paddingLeft: 3 }}>
                                <LabelInput
                                    label="Interest paid"
                                    value={"500"}
                                    editable={false}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, paddingRight: 3 }}>
                                <LabelInput
                                    label="Duration"
                                    value={["personal", "home utility", "family emergency", "livestock"].includes(this.state.loanType) ? "1 week" : "1 month"}
                                    editable={false}
                                />
                            </View>
                            <View style={{ flex: 1, paddingLeft: 3 }}>
                                <LabelInput
                                    label="Due date "
                                    value={"16/11/2020"}
                                    editable={false}
                                />
                            </View>
                        </View>
                        <LabelInput
                            label="Guarantor"
                            value={this.state.guarantor}
                            placeholder="Guarantor"
                            editable={false}
                        />
                        <LabelInput
                            label="Score"
                            value={"15"}
                            editable={false}
                        />

                        <View style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10%",
                            marginBottom: "10%",
                        }}>
                            <Button onPress={this.onApply} mode="contained">Apply</Button>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default Review;