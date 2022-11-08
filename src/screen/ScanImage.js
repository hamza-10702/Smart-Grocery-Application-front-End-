import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  PermissionsAndroid,
  SafeAreaView,
  Image,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function ScanImage() {

  let formData = new FormData();
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      // saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.assets[0].base64);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width -> ', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);
        setFilePath(response.assets[0]);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      // includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.data);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].base64);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response.assets[0]);

      // console.log(response.assets[0]);
      // let data = filePath;
      formData.append("srcImg",response.assets[0]);
      // let base64 = 'data:image/jpeg;base64,' + filePath;
      // console.log(base64);
    });
  };

  

  const submit = () => {
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '8b4043f97dmshfe567c5a6e8b352p147561jsnfaca9c421a92',
        'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com',
      },
      body: formData,
    };
    fetch(
      'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/',
      options,
    )
      .then(response => response.json())
      .then(response =>
        console.log(response.value),
        // setfirst(response.value),
      )
      .catch(err => console.error(err));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example of Image Picker in React Native
      </Text>
      <View style={styles.container}>
        <Image
          base64
          source={{
            uri: 'data:image/jpeg;base64,' + filePath,
          }}
          style={styles.imageStyle}
        />
        <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{filePath.uri}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>Launch Camera for Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => submit()}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
