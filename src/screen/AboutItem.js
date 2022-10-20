import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStatusBar from '../components/AppStatusBar';
const {width} = Dimensions.get('screen');
const cardWidth = width - 30;

export default function AboutItem({navigation, route}) {
  const item = route.params;
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
        <AppStatusBar
          hidden={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 220,
            backgroundColor: 'white',
          }}>
          <ImageBackground
            source={item.image}
            style={{height: '100%', width: '100%', marginTop: 1}}>
            <View style={style.crossBackBtn}>
              <Ionicons
                name="close"
                size={28}
                color="#F9813A"
                onPress={navigation.goBack}
              />
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 6,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 15,
              marginVertical: 10,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              marginRight: 15,
              marginVertical: 10,
              color: 'black',
              marginLeft: 15,
            }}>
            {`Min Rs. ${item.price}`}
          </Text>
        </View>
        <View>
          <View
            style={{
              borderBottomColor: 'white',
              borderWidth: 0.5,
              width: '90%',
              alignSelf: 'center',
            }}></View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {{
              margin: 20,
              borderColor: '#c4c9d0',
              height: 400,
              width: cardWidth,
              borderRadius: 15,
              borderWidth: 1,
              backgroundColor: '#e1b49970',
              alignSelf: 'center'
            }}>

            </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  crossBackBtn: {
    margin: 20,
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {color: 'white', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: 'green',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
