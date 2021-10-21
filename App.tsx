import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Card from './src/components/Card/Card';
import AnimatedStack from './src/components/AnimatedStack';
import users from './assets/data/users';

const App = () => {

  const onSwipeLeft = (user: Object) => {
    console.warn('swipe left')
  };

  const onSwipeRight = (user: Object) => {
    console.warn('swipe right')
  };

  return (
    <View style={styles.container}>
      <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});

export default App;
