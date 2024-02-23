import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Comp, { Comp2 } from './src/Primeiro';

function App() {
  return (
    <View style={style.container}>
      <Text style={style.txtG}>TURMA DEV MOBILE</Text>
      <Comp />
      <Comp2 />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#70aac9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtG: {
    fontSize: 32,
  }
})

export default App;

