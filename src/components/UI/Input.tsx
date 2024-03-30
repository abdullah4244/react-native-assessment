import React, { useState } from 'react'
import { StyleSheet, TextInput, TextInputProps,View,Text } from 'react-native'
import { GlobalColors } from '../../constants/colors';

interface CustomProps {
    PostFix?  : React.ReactNode,
    error? : boolean;
    errorMsg? : String; 
}
const Input = (props: TextInputProps & CustomProps) => {
    const {error,errorMsg,PostFix ,...restOfProps} = props;
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <>
        <TextInput
            {...restOfProps}
            style={[styles.inputStyle, { borderBottomColor: error ? "red" : isFocused ? GlobalColors.primaryGreen : GlobalColors.primaryGrey, borderBottomWidth: isFocused || error ? 2 : 1 }]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
        {errorMsg && <Text testID='inputError' style={styles.errorMsg}>{errorMsg}</Text>}
        {PostFix && <View style={styles.postFixContainer}>
                      {PostFix}
                    </View>}
        </>
    )
}

export default Input

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomColor: GlobalColors.primaryGrey,
        borderBottomWidth: 1,
        borderStyle: "solid",
        paddingBottom: 6,
        fontSize: 16,
        fontWeight: "700"
    },
    postFixContainer : {
        position: "absolute", 
        right: 10,
        top: 10,
    },
    errorMsg : {
        position: "absolute", 
        left: 0,
        top : 40,
        color : "red",
        fontSize : 14,
        fontWeight : '700'
    }
})