import {StyleSheet, Text, TouchableWithoutFeedback, View , Animated} from 'react-native';
import React from 'react';

export default function HeaderButton({title, backgroundColor, style, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container, style, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '50%',
    backgroundColor: '#1b1b33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: 'white', fontSize: 16},
});
