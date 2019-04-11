import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput } from 'react-native';
import firebase from 'firebase';
import { app, db } from '../config';
import console from 'console';


export default class Workout extends Component {
  state = {
    userId: null,
    exercise: '',
    set: '',
    weight: '',
    reps: 0,
    rest: 0.0,
   };

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    this.setState({ userId: userId })
  }

  handleSignout = () => {
    firebase.auth().signOut()
      .then(() => this.props.navigation.navigate('Home'))
      .catch((error) => Alert.alert(error.message));
  }
  handleAddSet = () => {
    const { exercise, set, weight, reps, rest } = this.state;
    dater = new Date().toLocaleDateString().replace(/\//g, '-');
    dbref = this.state.userId + '/' + dater;
    db.ref(dbref + '/' + set + '-' + (new Date())).set({
      exercise: exercise,
      set: set,
      weight: weight,
      reps: reps,
      rest: rest
    })
    .then((docRef) => {
      Alert.alert('Success!', 'Session Saved!');
      this.setState({
        exercise: '',
        set: '',
        weight: '',
        reps: 0,
        rest: 0.0,
      });
      })
    .catch((error) => Alert.alert('Error', error.message));
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
        <TextInput
          placeholder="Exercise"
          autoCapitalize="words"
          style={styles.textInput}
          onChangeText={exercise => this.setState({ exercise })}
          value={this.state.exercise}
        />
        <TextInput
          placeholder="Set"
          autoCapitalize="characters"
          style={styles.textInput}
          onChangeText={set => this.setState({ set })}
          value={this.state.set}
        />
        <TextInput
          placeholder="Weight"
          autoCapitalize="characters"
          style={styles.textInput}
          onChangeText={weight => this.setState({ weight })}
          value={this.state.weight}
        />
        <TextInput
          placeholder="Reps"
          autoCapitalize="characters"
          style={styles.textInput}
          onChangeText={reps => this.setState({ reps })}
          value={this.state.reps}
        />
        <TextInput
          placeholder="Rest"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={rest => this.setState({ rest })}
          value={this.state.rest}
        />
        <Button title="Add Set" onPress={this.handleAddSet.bind(this)} />
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
