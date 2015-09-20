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
  TouchableHighlight
} = React;

var Notificari = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.newButton}
          underlayColor="#c4c4c4">
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
