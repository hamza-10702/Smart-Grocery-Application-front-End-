import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FloatingButton(props) {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'red',
          alignItems: 'center',
          width: 50,
          position: 'absolute',
          bottom: 30,
          right: 20,
          height: 50,
          backgroundColor: 'red',
          borderRadius: 100,
          elevation: 5,
          justifyContent: 'center',
        }}
        onPress = {props.openScanList}

        activeOpacity={0.8}
        >
        <Ionicons name="scan-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}
