import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'


interface Props {
    progress: Animated.SharedValue<number>;
    start: number;
    end: number;
}

export const Bubble: React.FC<Props> = ({ progress, start, end }) => {
    const styles = useAnimatedStyle(() => {
        if (progress.value === null) {
            return { opacity: 1 }
        }

        const opacity = interpolate(
            progress.value,
            [start, end],
            [0.5, 1],
            Extrapolate.CLAMP
        );
        const scale = interpolate(
            progress.value,
            [start, end],
            [1, 1.5],
            Extrapolate.CLAMP
        );
        return { opacity, transform: [{ scale }] };
    });



    return (
        <Animated.View style={[style.bubble, styles]}>
            <Text></Text>
        </Animated.View>
    )
}


const style = StyleSheet.create({
    bubble: {
        backgroundColor: 'blue',
        borderRadius: 10,
        width: 20,
        height: 20
    }
});
