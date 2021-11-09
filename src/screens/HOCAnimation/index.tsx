import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { cancelAnimation, Easing, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Bubble } from './Bubble';



export const HOCAnimation: React.FC = () => {
    const bubbles = [0, 1, 2];
    const delta = 1 / bubbles.length;
    const progress = useSharedValue<number | null>(null);

    return (
        <View style={style.container}>
            <View style={style.circle}>
                {bubbles.map((item) => {
                    const start = item * delta;
                    const end = start + delta;
                    return <Bubble {...{ start, end, progress }} />
                })}
            </View>
            <Button
                title='Play'
                onPress={() => {
                    if (progress.value === null) {
                        progress.value = withRepeat(withTiming(1, { duration: 500, easing: Easing.inOut(Easing.ease) }), -1, true);
                    }
                }}
            />
            <Button
                title='Pause'
                onPress={() => cancelAnimation(progress)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: '50%',
        height: '25%',
        backgroundColor: 'gray',
        borderRadius: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    bubble: {
        backgroundColor: 'blue',
        borderRadius: 15,
        width: 30,
        height: 30
    }
});