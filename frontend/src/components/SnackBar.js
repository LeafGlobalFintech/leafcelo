import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
class SnackBar extends Component {
    state = {
        isVisible: false,
        msg: ""
    }
    componentDidMount() {
        global.showSnackbar = this.showSnackbar
    }
    onDismissSnackBar = () => {
        this.setState({ isVisible: false })
    }
    showSnackbar = (msg, BG) => {
        this.setState({ isVisible: true, msg, BG })
    }
    render() {
        return (
            <Snackbar
                visible={this.state.isVisible}
                onDismiss={this.onDismissSnackBar}
                style={{ backgroundColor: this.state.BG || 'black' }}
            >
                {this.state.msg}
            </Snackbar>
        );
    }
}

export default SnackBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});
