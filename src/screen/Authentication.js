import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, View, Animated, Dimensions} from 'react-native';
import HeaderImage from '../components/login/HeaderImage';
import HeaderButton from '../components/login/HeaderButton';
import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';

const {width} = Dimensions.get('window');

export default function Authentication() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)'],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)'],
  });
  return (
    <View style={{flex: 1, paddingTop: 120}}>
      <View style={{height: 80}}>
        <HeaderImage
          leftHeading="Welcome "
          rightHeading="Back"
          subHeading="YouTube Task Manager"
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
      </View>

      <View style={[styles.buttonSection]}>
        <HeaderButton
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title="Login"
          onPress={() => scrollView.current.scrollTo({x: 0})}
        />
        <HeaderButton
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title="Sign up"
          onPress={() => scrollView.current.scrollTo({x: width})}
        />
      </View>

      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled = {true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animation}}}],
          {useNativeDriver: false},
        )}>
        
        <Login />
        <ScrollView>
        </ScrollView>
          <SignUp />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  borderLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  borderRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
