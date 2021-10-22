import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    useAnimatedGestureHandler,
    useDerivedValue,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import Like from '../../../assets/images/LIKE.png';
import Nope from '../../../assets/images/nope.png';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

interface Props {
    data: Array<Object>;
    renderItem: (item: { item: Object }) => JSX.Element;
    onSwipeRight: (user: Object) => void;
    onSwipeLeft: (user: Object) => void;
}

const AnimatedStack: React.FC<Props> = ({ data, renderItem, onSwipeLeft, onSwipeRight }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(currentIndex + 1);

    const currentProfile = data[currentIndex];
    const nextProfile = data[nextIndex];

    const { width } = useWindowDimensions();
    const hiddenTranslateX = 2 * width;

    const translateX = useSharedValue(0);
    const rotate = useDerivedValue(() => interpolate(translateX.value,
        [0, hiddenTranslateX],
        [0, ROTATION]
    ) + 'deg');

    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
            {
                rotate: rotate.value
            }
        ]
    }));

    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [{
            scale: interpolate(translateX.value,
                [-hiddenTranslateX, 0, hiddenTranslateX],
                [1, 0.8, 1]
            )
        }],
        opacity: interpolate(translateX.value,
            [-hiddenTranslateX, 0, hiddenTranslateX],
            [1, 0.6, 1]
        )
    }));

    const likeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value,
            [0, width / 2],
            [0, 1]
        )
    }));

    const nopeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value,
            [0, -width / 2],
            [0, 1]
        )
    }));

    useEffect(() => {
        translateX.value = 0;
        setNextIndex(currentIndex + 1);
    }, [currentIndex]);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
        },
        onEnd: (event) => {
            if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0);
                return;
            }
            translateX.value = withSpring(
                hiddenTranslateX * Math.sign(event.velocityX),
                {},
                () => runOnJS(setCurrentIndex)(currentIndex + 1)
            );
            const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
            onSwipe && runOnJS(onSwipe)(currentProfile);
        }
    });

    return (
        <View style={styles.container}>
            {nextProfile && (
                <View style={styles.nextCardContainer}>
                    <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                        {renderItem({ item: nextProfile })}
                    </Animated.View>
                </View>
            )}
            {currentProfile && (
                <PanGestureHandler onGestureEvent={gestureHandler} >
                    <Animated.View style={[styles.animatedCard, cardStyle]}>
                        <Animated.Image source={Like} style={[styles.like, likeStyle, { left: 10 },]} resizeMode='contain' />
                        <Animated.Image source={Nope} style={[styles.like, nopeStyle, { right: 10 }]} resizeMode='contain' />
                        {renderItem({ item: currentProfile })}
                    </Animated.View>
                </PanGestureHandler>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1
    },
    like: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 10,
        zIndex: 1,
        // elevation: 1
    },
    animatedCard: {
        width: '90%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
    }
})

export default AnimatedStack;
