import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('screen');
const searchInputWidth = width / 1.4;

export default function TopSearchBar(props) {
  return (
    <View style={style.header}>
      <Ionicons name="menu-outline" size={28} onPress={props.openDrawer} />
      <View style={style.inputContainer}>
        <Icon name="search" size={20} />
        <TextInput
          style={{flex: 1, fontSize: 18}}
          placeholder="Search grocery"
          onChangeText={text => {
            console.log(text);
          }}
        />

        <TouchableOpacity onPress={() => console.log('clear')}>
          <View>
            <Ionicons name="md-close-circle-sharp" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 5}}>
        <Ionicons name="cart-outline" size={30} color="red" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'red',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  inputContainer: {
    // flex: 2,
    width: searchInputWidth,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
});
