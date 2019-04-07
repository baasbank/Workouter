// SignUp.js

import firebase from 'firebase';
import app from '../config';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default class Authentication extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Workout'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  handleLogin = () => {
    //TODO: Write logic to login
    console.log('login')
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp.bind(this)} />
        <Button title="Login" onPress={this.handleLogin.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'center',
    marginTop: 90,
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})