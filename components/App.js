import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ProductsList from './ProductsList';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.appTitle}>TSTORE</Text>
      <ProductsList />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  appTitle: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 5,
  },
});
