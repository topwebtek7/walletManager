import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from './styles/styles.js'
import Wallet from './components/Wallet.js'
import History from './components/History.js'

type Props = {};
export default class App extends Component<Props> {
  constructor () {
    super()
    this.state = {
      walletA: 100,
      walletB: 0,
      walletAInput: 100,
      walletBInput: 0,
      history: []
    }
    this._onPressFund = this._onPressFund.bind(this)
    this._onPressReFund = this._onPressReFund.bind(this)
    this._setValueA = this._setValueA.bind(this)
    this._setValueB = this._setValueB.bind(this)
  }
  _onPressFund () {
    const {walletA, walletB, walletAInput} = this.state
    const leftBalance = walletA - walletAInput
    if (!walletAInput || leftBalance < 0) {
      Alert.alert(
        'No Enough Balance',
        'No Enough Balance to Transfer!',
        [
          {text: 'OK', style: 'cancel'}
        ]
        ,
        {cancelable: true}
      )
      return
    }
    this.setState({
      history: [...this.state.history, {
        amount: walletAInput,
        type: 'Fund',
        source: 'A',
        dest: 'B'
      }],
      walletA: leftBalance,
      walletB: walletB + walletAInput
    })
  }
  _onPressReFund () {
    const {walletA, walletB, walletBInput} = this.state
    const leftBalance = walletB - walletBInput
    if (!walletBInput || leftBalance < 0) {
      Alert.alert(
        'No Enough Balance',
        'No Enough Balance to Transfer!',
        [
          {text: 'OK', style: 'cancel'}
        ]
        ,
        {cancelable: true}
      )
      return
    }
    this.setState({
      history: [...this.state.history, {
        amount: walletBInput,
        type: 'Refund',
        source: 'B',
        dest: 'A'
      }],
      walletB: leftBalance,
      walletA: walletA + walletBInput
    })
  }
  _setValueA(value) {
    this.setState({
      walletAInput: Number(value) || 0
    })
  }
  _setValueB(value) {
    this.setState({
      walletBInput: Number(value) || 0
    })
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.walletsContainer}>
          <Wallet walletName={'A'} balance={this.state.walletA} inputBalance={this.state.walletAInput} setValue={this._setValueA} />
          <Wallet walletName={'B'} balance={this.state.walletB} inputBalance={this.state.walletBInput} setValue={this._setValueB}/>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPressFund}
          >
            <Text style={styles.centerText}> Fund </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressReFund}
            style={styles.button}
          >
            <Text style={styles.centerText}> Refund </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historyContainer}>
          <Text>History</Text>
          <History history={this.state.history} />
        </View>
      </View>
    );
  }
}
