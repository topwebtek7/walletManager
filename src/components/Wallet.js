import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TextInput
} from 'react-native';
import styles from '../styles/styles.js'

type Props = {
  walletName: PropTypes.string,
  balance: PropTypes.number,
  inputBalance: PropTypes.number,
  setValue: PropTypes.func
};
export default class Wallet extends Component<Props> {
  render() {
    const {walletName, balance, inputBalance} = this.props
    return (
      <View style={styles.wallet}>
        <View>
          <Text style={styles.instructions}>
            Balance: ${balance}
          </Text>
        </View>
        <View style={styles.boxContainer}>
          <TextInput
            style={styles.boxText}
            onChangeText={(text) => this.props.setValue(text)}
            value={inputBalance.toString()}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <Text style={[styles.centerText]}>{walletName}</Text>
      </View>
    );
  }
}
