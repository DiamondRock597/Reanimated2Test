import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Card from '../../../components/Card/Card';
import AnimatedStack from '../../../components/AnimatedStack';
import users from '../../../../assets/data/users';

const Home = () => {

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
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name='undo' size={30} color='#FBD88B' />
        </View>
        <View style={styles.button}>
          <Entypo name='cross' size={30} color='#F76C6B' />
        </View>
        <View style={styles.button}>
          <FontAwesome name='star' size={30} color='#3AB4CC' />
        </View>
        <View style={styles.button}>
          <FontAwesome name='heart' size={30} color='#4FCC94' />
        </View>
        <View style={styles.button}>
          <Ionicons name='flash' size={30} color='#A65CD2' />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed'
  },
  icons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50
  }
});

export default Home;
