import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%'
  },
  container: {
  },
  centerText: {
    textAlign: 'center'
  },
  walletsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20
  },
  wallet: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  boxContainer: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 15
  },
  boxText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  button: {
    width: 150,
    padding: 10,
    backgroundColor: '#7ab',
    marginTop: 20
  },
  historyContainer: {
    padding: 10,
    maxHeight: 250
  },
  historyScrollView: {
    borderWidth: 1,
    borderColor: '#000'
  },
  historyRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  historyCell: {
    flex: 1,
    alignSelf: 'stretch',
    borderRightWidth: 1,
    borderColor: '#000'
  },
  historyRowHeader: {
    backgroundColor: '#777'
  },
  historyRowHighlight: {
    backgroundColor: '#CCC'
  }

});

export default styles