import React, { useState } from 'react'
import { View, Button } from 'react-native'
import Animated, { runOnUI, useSharedValue } from 'react-native-reanimated'

const sayHello = (text, from) => {
    'worklet';
    text.value = `Hello from ${from}`;
}

export const Worklets = () => {
    const text = useSharedValue("123");

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Animated.Text>{text.value}</Animated.Text>
            <Button title='Say Hello' color='blue' onPress={() => runOnUI(sayHello)(text, 'Beautiful Zueri')} />
        </View>
    )
}

