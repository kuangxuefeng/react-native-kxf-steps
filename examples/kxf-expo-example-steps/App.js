import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Steps from 'react-native-kxf-steps'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>kxf-expo-example-steps</Text>
      <Text>vertical</Text>
      <Steps datas={{titles:['第一步','第二步来了','第三步','第四步'], infos:['取钱开始','银行打款','银行正打款中','打款成功了']}} orientation='vertical' style={{backgroundColor:'#999999', padding:20,}}></Steps>
      <Text>horizontal</Text>
      <Steps datas={{titles:['第一步','第二步来了','第三步','第四步'], infos:['取钱开始','银行打款','银行正打款中','打款成功了']}} orientation='horizontal' style={{backgroundColor:'#999999', padding:20,}}></Steps>
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
