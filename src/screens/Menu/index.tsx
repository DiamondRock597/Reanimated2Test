import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { MenuButton } from '../../components/MenuButton'
import { menuButtons } from './menu_buttons'

interface Props {
    navigation: Object;
}

export const Menu: React.FC<Props> = ({ navigation }) => {

    const onPress = (name: string) => navigation.navigate(name);

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={menuButtons}
                renderItem={({ item }) => <MenuButton
                    onPress={onPress}
                    name={item.name}
                />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#e5e5e5',
    }
})