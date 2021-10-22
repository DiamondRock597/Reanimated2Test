import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CommonAnimation } from '../../screens/CommonAnimation';
import { Menu } from '../../screens/Menu';
import { Routes } from './routes';
import { Worklets } from '../../screens/Worklets';
import { PanGesture } from '../../screens/PanGesture';

const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.Menu}>
                <Stack.Screen component={Menu} name={Routes.Menu} />
                <Stack.Screen component={CommonAnimation} name={Routes.CommonAnimation} />
                <Stack.Screen component={Worklets} name={Routes.Worklets} />
                <Stack.Screen component={PanGesture} name={Routes.PanGesture} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}