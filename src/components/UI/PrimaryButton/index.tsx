import React from 'react';
import { Pressable, StyleSheet, View, Text, GestureResponderEvent } from 'react-native';
import { GlobalColors } from '../../../constants/colors';

interface PrimaryButtonProps {
  label: string;
  disabled?: boolean;
  onPress: (e: GestureResponderEvent) => void;
}
const PrimaryButton = ({ label, onPress, disabled }: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        testID="primaryButton"
        onPress={onPress}
        disabled={disabled}
        style={styles.buttonInnerContainer}
        android_ripple={{ color: GlobalColors.rippleGreen }}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: GlobalColors.primaryGreen,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    padding: 14,
  },
  buttonText: {
    fontSize: 18,
    color: GlobalColors.secondaryGreen,
    fontWeight: '700',
    textAlign: 'center',
  },
});
