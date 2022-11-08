import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Linking,
  Text,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';

export default function ScanList({navigation, route}) {
  const [hasPermission, setHasPermission] = useState(false);

  const isFocused = useIsFocused();
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef(null);

  useEffect(() => {
    requesCameraPermission();
  }, []);

  const requesCameraPermission = useCallback(async () => {
    const permission = Camera.requestCameraPermission();

    if (permission === 'denied') {
      await Linking.openSettings();
    }
  }, []);

  function RenderCamera() {
    const onPressButton = async () => {
      try {
        if (camera.current == null) throw new Error('Camera Ref is Null');
        console.log('Photo taking ....');
        const photo = await camera.current.takePhoto({
          flash: 'on',
          // skipMetadata: false,
          qualityPrioritization: 'speed',
        });

        console.log(photo);
        navigation.navigate('ScanImage' , {photoPath: photo.path})
        console.log(photo.path);
      } catch (error) {
        console.log(error);
      }
    };

    if (device == null) {
      return (
        <View
          style={{
            flex: 1,
          }}></View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
          }}>
          <Camera
            style={{flex: 1}}
            device={device}
            ref={camera}
            isActive={isFocused}
            enableZoomGesture
            photo={true}
            torch="off"
            // torch={device.hasTorch && torch ? 'on' : 'off'}
          />
          {/* scan button */}
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              bottom: 40,
              left: 0,
              right: 0,
            }}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <MaterialIcons
                name="line-scan"
                size={40}
                color="black"
                onPress={onPressButton}
              />
            </View>
          </View>
        </View>
      );
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <RenderCamera />
    </SafeAreaView>
  );
}
