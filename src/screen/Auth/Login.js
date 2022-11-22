import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginValidationSchema} from '../../Schema/index';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/login/Header';
import ModalNative from '../../components/Modal/Modal';
import Toaster, {toastConfig} from '../../components/Toaster/Toaster';
import AppStatusBar from '../../components/AppStatusBar';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {useEffect} from 'react';

const initialValues = {
  email: '',
  password: '',
};

export default function Login() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async values => {
    try{
    if (email && password) {
      const formData = {email, password};
      const res = await loginUser(formData);
      if (res.data.status === 'success') {
        await storeToken(res.data.token); // Store Token in Storage
        clearTextInput();
        navigation.navigate('UserPanelTab');
      }
      if (res.data.status === 'failed') {
        // Toast.show({
        //   type: 'warning',
        //   position: 'top',
        //   topOffset: 0,
        //   text1: res.data.message
        // })
      }
    } else {
      // Toast.show({
      //   type: 'warning',
      //   position: 'top',
      //   topOffset: 0,
      //   text1: "All fields are Required"
      // })
    }
  }catch(error){

  }
  };

  return (
    <View style={styles.container}>
      <View>
        <Header name={'Sign Up'} />
      </View>
      <View style={styles.formContainer}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialValues}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, values, errors, isValid}) => (
            <View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Ionicons name="mail-outline" size={20} />
                  </View>
                  <View style={{flex: 1}}>
                    <TextInput
                      type="focused"
                      name="email"
                      label="Email"
                      style={styles.textInput}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      activeUnderlineColor="#054f4f"
                    />
                  </View>
                </View>
                {errors.email && (
                  <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                    {errors.email}
                  </Text>
                )}
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Ionicons name="lock-closed-outline" size={25} />
                  </View>
                  <View style={{flex: 1}}>
                    <TextInput
                      mode="flat"
                      name="password"
                      label="Password"
                      style={styles.textInput}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      activeUnderlineColor="#054f4f"
                      secureTextEntry={passwordVisible}
                      right={
                        <TextInput.Icon
                          name={passwordVisible ? 'eye-off' : 'eye'}
                          onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                      }
                    />
                  </View>
                </View>
                {errors.password && (
                  <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View style={styles.loginButton}>
                <Button
                  style={{
                    backgroundColor: '#054f4f',
                  }}
                  mode="contained"
                  onPress={() => {
                    navigation.navigate('SideDrawer');
                    console.log(values);
                  }}
                  disabled={!isValid}>
                  LOGIN
                </Button>
              </View>
              <View style={styles.forgetPassword}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Forget Password');
                    setModalVisible(true);
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Forget Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
      {modalVisible ? (
        <View>
          <ModalNative
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  formContainer: {
    borderColor: 'gray',
    alignSelf: 'center',
    height: 300,
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
  },
  loginButton: {
    marginTop: 10,
  },
  forgetPassword: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});

{
  /* <Button
mode="Contained"
color="black"
contentStyle={{height: 44}}
labelStyle={{fontSize: 18}}
onPress={handleSubmit}
style={{marginVertical: 10}}
disabled={!isValid}>
SIGN UP
</Button> */
}
