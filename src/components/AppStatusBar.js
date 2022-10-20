import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

export default function AppStatusBar({backgroundColor, ...props}) {
  return (
    <View>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  // statusBar: {
  //   height: BAR_HEIGHT,
  // },
});
