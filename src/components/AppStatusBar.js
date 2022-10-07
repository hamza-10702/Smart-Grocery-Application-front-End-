import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

export default function AppStatusBar({backgroundColor, ...props}) {
  return (
    <View style={[styles.statusBar, backgroundColor]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}  />
    </View>
  );
}

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});
