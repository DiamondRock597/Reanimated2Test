import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Pressable } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommuniyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Matches from './Matches';

enum Screens {
    Home = 'HOME',
    Chat = 'CHAT'
}

export const CommonAnimation = () => {
    const [activeScreen, setActiveScreen] = useState(Screens.Home);

    const color = '#b5b5b5';
    const activeColor = '#F76C6B';

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <View style={styles.topNavigation}>
                    <Pressable onPress={() => setActiveScreen(Screens.Home)}>
                        <Fontisto name='tinder' size={24} color={activeScreen === Screens.Home ? activeColor : color} />
                    </Pressable>
                    <MaterialCommuniyIcons name='star-four-points' size={24} color={color} />
                    <Pressable onPress={() => setActiveScreen(Screens.Chat)}>
                        <Ionicons name='ios-chatbubbles' size={24} color={activeScreen === Screens.Chat ? activeColor : color} />
                    </Pressable>
                    <FontAwesome name='user' size={24} color={color} />
                </View>
                {activeScreen === Screens.Home ? <Home /> : <Matches />}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    root: {
        flex: 1
    },
    topNavigation: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        padding: 10
    }
});