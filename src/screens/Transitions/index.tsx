import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { CreditCard } from '../../components/CreditCard';

const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

enum StateButton {
    Reset = 'Reset',
    Start = 'Start'
}

export const Transitions = () => {
    const [toggled, setToggle] = useState(false);
    const isToggled = useSharedValue(false);

    useEffect(() => {
        isToggled.value = toggled;
    }, [toggled, isToggled]);
    
    const transition = useDerivedValue(() => isToggled.value);

    return (
        <View style={styles.container}>
            {cards.map((card, index) => (
                <CreditCard key={card.id} {...{ transition, index }} />
            ))}
            <Button
                title={toggled ? StateButton.Reset : StateButton.Start}
                onPress={() => setToggle((prev) => !prev)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
