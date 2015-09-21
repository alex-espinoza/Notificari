/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NewNotificationModal = require('./app/components/NewNotificationModal');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal
} = React;

var Notificari = React.createClass({
  getInitialState: function() {
    return {
      isModalVisible: false
    }
  },

  _setModalVisible: function(boolean) {
    this.setState({isModalVisible: boolean});
  },

  render: function() {
    return (
      <View style={styles.container}>
        <NewNotificationModal
          isModalVisible={this.state.isModalVisible}
          setModalVisible={this._setModalVisible} />

        <TouchableHighlight
          style={styles.newButton}
          underlayColor="#c4c4c4"
          onPress={this._setModalVisible}>
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
  }
});

AppRegistry.registerComponent('Notificari', () => Notificari);
