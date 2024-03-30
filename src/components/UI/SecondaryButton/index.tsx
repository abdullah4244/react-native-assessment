import React from 'react';
import { Pressable, StyleSheet, View, Text, GestureResponderEvent } from 'react-native';
import { GlobalColors } from '../../../constants/colors';

interface SecondaryButtonProps {
  label: string;
  disabled?: boolean;
  onPress: (e: GestureResponderEvent) => void;
}
const SecondaryButton = ({ label, onPress, disabled }: SecondaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        testID="secondaryButton"
        disabled={disabled}
        onPress={onPress}
        style={styles.buttonInnerContainer}
        android_ripple={{ color: GlobalColors.rippleRed }}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: GlobalColors.errorRed,
    borderRadius: 24,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    padding: 14,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
