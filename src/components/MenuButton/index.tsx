import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    name: string;

    onPress: (name: string) => void;
}
export const MenuButton: React.FC<Props> = ({ name, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(name)}>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '100%',
        padding: 20,
        marginTop: 15
    }
});