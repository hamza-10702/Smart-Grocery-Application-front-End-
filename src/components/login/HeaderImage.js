import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import React from 'react';

export default function HeaderImage({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTranslateY = -20,
  rightHeaderOpacity = 0,
}) {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.heading,
            {transform: [{translateX: leftHeaderTranslateX}]},
          ]}>
          {leftHeading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity: rightHeaderOpacity,
              transform: [{translateY: rightHeaderTranslateY}],
            },
          ]}>
          {rightHeading}
        </Animated.Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>

    // <View style={styles.headerImage}>
    //   <View>
    //     <Image
    //       style={styles.image}
    //       source={require('../../assets/images/header-image.jpg')}
    //     />
    //   </View>

    //   <View style={styles.container}>
    //     <Animated.Text
    //       style={[
    //         styles.heading,
    //         {transform: [{translateX: leftHeaderTranslateX}]},
    //       ]}>
    //       {leftHeading}
    //     </Animated.Text>
    //     <Animated.Text
    //       style={[
    //         styles.heading,
    //         {
    //           opacity: rightHeaderOpacity,
    //           transform: [{translateY: rightHeaderTranslateY}],
    //         },
    //       ]}>
    //       {rightHeading}
    //     </Animated.Text>
    //   </View>
    //   <Text style={styles.subHeading}>{subHeading}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 270,
    backgroundColor: 'red',
  },

  image: {
    alignSelf: 'center',
    width: 300,
    height: 200,
    borderRadius: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {fontSize: 30, fontWeight: 'bold', color: '#1b1b33'},
  subHeading: {fontSize: 18, color: '#1b1b33', textAlign: 'center'},
});
