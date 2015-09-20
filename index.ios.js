/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal
} = React;

var Notificari = React.createClass({
  getInitialState() {
    return {
      animated: true,
      transparent: false,
      modalVisible: false
    }
  },

  _setModalVisible: function(boolean) {
    this.setState({modalVisible: boolean});
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Modal
          animated={this.state.animated}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}>
          <View style={styles.modalContainer}>
            <Text>Modal works!</Text>
            <TouchableHighlight
              style={styles.newButton}
              underlayColor="#c4c4c4"
              onPress={this._setModalVisible.bind(this, false)}>
              <Text style={styles.newButtonText}>
                Close Modal
              </Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.newButton}
          underlayColor="#c4c4c4"
          onPress={this._setModalVisible.bind(this, true)}>
          <Text style={styles.newButtonText}>
            New Notification
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 20
  },
  newButton: {
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 25
  },
  newButtonText: {
    fontSize: 18
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#c3f8ff',
    marginTop: 20
  }
});

AppRegistry.registerComponent('Notificari', () => Notificari);
