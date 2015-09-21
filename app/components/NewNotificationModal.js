'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  Text,
  DatePickerIOS
} = React;

var NewNotificationModal = React.createClass({
  getDefaultProps: function() {
    return {
      date: new Date()
    };
  },

  getInitialState: function() {
    return {
      animated: true,
      transparent: false,
      date: this.props.date
    };
  },

  _closeModal: function() {
    this.props.setModalVisible(false);
  },

  _onTimeChange: function(date) {
    this.onDateChange(date);
  },

  // this function is required by DatePickerIOS
  onDateChange: function(date) {
    this.setState({date: date});
  },

  render: function() {
    return (
      <Modal
        animated={this.state.animated}
        transparent={this.state.transparent}
        visible={this.props.isModalVisible}>
        <View style={styles.modalContainer}>
          <DatePickerIOS
            date={this.state.date}
            minuteInterval={1}
            mode='time'
            onDateChange={this._onTimeChange} />
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