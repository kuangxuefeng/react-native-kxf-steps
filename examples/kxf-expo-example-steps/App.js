import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Steps from 'react-native-kxf-steps'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>kxf-expo-example-steps</Text>
      <Steps numVal={1} stepsTxtColor='red'></Steps>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
