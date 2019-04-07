import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import app from '../config';

export default class Workout extends Component {
  state = { errorMessage: null }

  handleSignout = () => {
    firebase.auth().signOut()
      .then(() => this.props.navigation.navigate('Home'))
      .catch((error) => this.setState({ errorMessage: error.message}));
  }
  render() {
    return (
      <View style={headerContainer}>
        <Button 
          onPress={this.handleSignout.bind(this)}
          title='Logout'
          color='blue'
          accessibilityLabel='Logout Button'
        />
        <Text style={header}>Record A New Session</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    marginTop: 55
  },
  header: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

const { header, headerContainer } = styles;
