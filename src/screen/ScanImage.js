import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
  PermissionsAndroid,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ModalNative from '../components/Modal/Modal';
const {width, height} = Dimensions.get('screen');
import AppStatusBar from '../components/AppStatusBar';
import CustomInput from './CustomInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useScanListMutation} from '../services/userAuthentication';
import {set} from 'immer/dist/internal';

export default function ScanImage({navigation, route}) {
  const checkCameraOrGellary = route.params;
  const [filePath, setFilePath] = useState({});

  const [sendImage] = useScanListMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('scanImage', {
      name: filePath.fileName,
      uri: filePath.fileName,
      type: 'image/jpg',
    });

    console.log(formData);
    try {
      const res = await sendImage(formData);
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const checkParamsValue = () => {
    console.log(route.params);
    if (checkCameraOrGellary === 'camera') {
      console.log(checkCameraOrGellary);
      captureImage('photo');
    } else if (checkCameraOrGellary === 'gallery') {
      console.log(checkCameraOrGellary);
      chooseFile('photo');
    }
  };
  useEffect(() => {
    checkParamsValue();
  }, []);

  const submit = () => {
    console.log('Submittt');
  };

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
      maxWidth: 700,
      maxHeight: 700,
      quality: 1,
      durationLimit: 30,
      // saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          navigation.navigate('DashBoard');
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          navigation.navigate('DashBoard');
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          navigation.navigate('DashBoard');
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          navigation.navigate('DashBoard');
        }

        // console.log('fileName -> ', response.assets[0]);
      });
    }
  };

  const chooseFile = async type => {
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
        navigation.navigate('DashBoard');
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        navigation.navigate('DashBoard');
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        navigation.navigate('DashBoard');
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        navigation.navigate('DashBoard');
      }
      if (response.didCancel) {
        navigation.navigate('DashBoard');
      } else {
        setFilePath(response?.assets[0]);
        console.log('fileName -> ', response?.assets[0]);
        const imgData = new FormData();
        imgData.append('scanImage', {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        });

        const config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: imgData,
        };

        fetch(
          'https://smart-grocery-application.herokuapp.com/scan-image',
          config,
        )
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#c0d3d3'}}>
      <AppStatusBar
        backgroundColor="black"
        barStyle="dark-content"
        hidden={true}
      />
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Search Products</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            width: width,
            height: 200,
            backgroundColor: 'black',
            aspectRatio: 1 * 1.4,
          }}>
          <Image
            source={{uri: filePath.uri}}
            // source={require('../assets/images/scan.jpg')}
            style={{
              resizeMode: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
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
    width: '100%',
    height: '100%',
    margin: '4%',
    // alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'contain',
  },
});
