import React, { Component } from 'react';
import {
    ScrollView,
} from "react-native";

import { BgView, Header } from "../../../components/Layouts";
import { ComingSoonCard } from '../../../components/cards';


class ComingSoon extends Component {
    render() {
        return (
            <BgView>
                <Header.Back title="Coming Soon" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <ComingSoonCard />
                </ScrollView>
            </BgView>
        );
    }
}

export default ComingSoon;