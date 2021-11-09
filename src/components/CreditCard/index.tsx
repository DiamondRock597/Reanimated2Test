import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

interface Props {
    index: number;
    transition: any;
}

export const CreditCard: React.FC<Props> = ({ index, transition }) => {
    const rotate = (index - 1) * interpolate(transition.value, [0, 1], [0, Math.PI / 6]);

    const style = useAnimatedStyle(() => ({

        transform: [
            { rotate: `${rotate}rad` },
        ]
    }));
    

    return (
        <Animated.View style={[styles.container,
            style
        ]} />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: 300,
        height: 200,
        borderRadius: 30,
        opacity: 0.7,
        position: 'absolute',
        top: 200
    }
});