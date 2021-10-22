import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { diffClamp, event, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';

import { CreditCard } from '../../components/CreditCard';

const { width, height } = Dimensions.get('window');

export const PanGesture = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            ctx.offsetX = translateX.value;
            ctx.offsetY = translateY.value;
        },
        onActive: (event, ctx) => {
            translateX.value = ctx.offsetX + event.translationX;
            translateY.value = ctx.offsetY + event.translationY;
        },
        onEnd: (event, ctx) => {
            translateX.value = withDecay({ velocity: event.velocityX });
            translateY.value = withDecay({ velocity: event.velocityY })
        }
    });

    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value
            },
            {
                translateY: translateY.value
            }
        ]
    }));

    return (
        <View style={style.container}>
            <PanGestureHandler {...{ onGestureEvent }}>
                <Animated.View style={cardStyle}>
                    <CreditCard />
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
});