import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalColors } from '../constants/colors';

const SuccessScreen = () => {
  return (
    <View style={styles.screeenContainer}>
      <Text style={styles.textStyle}>Success!</Text>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  screeenContainer: {
    flex: 1,
    backgroundColor: GlobalColors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: '800',
    color: '#ffffff',
  },
});
