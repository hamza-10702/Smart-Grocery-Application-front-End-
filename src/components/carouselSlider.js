import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default function Carousel() {
  const [images, setImages] = React.useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?tree',
  ]);

  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        sliderBoxHeight={400}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
    flex: 1,
  },
});
