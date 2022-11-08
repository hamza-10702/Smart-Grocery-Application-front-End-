import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../Permission';

export default function CropImagePicker() {
  const imageData = new FormData();
  //   useEffect(() => {

  //   }, []);

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      Alert.alert('Profile Picture', 'Choose an option', [
        {text: 'Camera', onPress: onCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };

  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('selected Image', image);
      imageUpload(image);
    });
  };

  const imageUpload = imagePath => {
    imageData.append('File', imagePath);
    console.log('form data', imageData);
  };

  const submit = () => {
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '8b4043f97dmshfe567c5a6e8b352p147561jsnfaca9c421a92',
        'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com',
      },
      body: imageData,
    };
    fetch(
      'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/',
      options,
    )
      .then(response => response.json())
      .then(response =>
        console.log(response),
        // setfirst(response.value),
      )
      .catch(err => console.error(err));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnStyle}
        activeOpacity={0.8}
        onPress={onSelectImage}>
        <Text style={styles.textStyle}>select your image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => submit()}>
        <Text style={styles.textStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: 'blue',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
});
