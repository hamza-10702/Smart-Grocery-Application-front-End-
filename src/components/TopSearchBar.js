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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopSearchBar() {
  return (
    <View>
      <View style={style.inputContainer}>
        <Icon name="search" size={28} />
        <TextInput
          style={{flex: 1, fontSize: 18}}
          placeholder="Search for food"
          onChangeText={text => {
            console.log(text);
          }}
        />

        <TouchableOpacity onPress={() => console.log('clear')}>
          <View>
            <Ionicons name="md-close-circle-sharp" size={28} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
