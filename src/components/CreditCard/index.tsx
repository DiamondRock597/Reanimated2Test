import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const CreditCard = () => {
    return (
        <View style={style.container} />
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: 300,
        height: 200,
        borderRadius: 30,
        opacity: 0.7
    }
});