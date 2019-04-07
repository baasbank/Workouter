import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Workout = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>Record A New Session</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    display: "flex",
    justifyContent: 'center',
    marginTop: 55
  },
  header: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

const { header, headerContainer } = styles;

export default Workout;