'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  Text
} = React;

var NewNotificationModal = React.createClass({
  getInitialState: function() {
    return {
      animated: true,
      transparent: false
    };
  },

  _closeModal: function() {
    this.props.setModalVisible(false);
  },

  render: function() {
    return (
      <Modal
        animated={this.state.animated}
        transparent={this.state.transparent}
        visible={this.props.isModalVisible}>
        <View style={styles.modalContainer}>
          <Text>Modal works!</Text>
          <TouchableHighlight
            style={styles.closeButton}
            underlayColor="#c4c4c4"
            onPress={this._closeModal}>
            <Text style={styles.closeButtonText}>
              Close Modal
            </Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
});

var styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#c3f8ff',
    marginTop: 20
  },
  closeButton: {
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 25
  },
  closeButtonText: {
    fontSize: 18
  }
});

module.exports = NewNotificationModal;