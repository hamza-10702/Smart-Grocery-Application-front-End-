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
import {loginValidationSchema} from '../Schema/index';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppStatusBar from '../components/AppStatusBar';

const initialValues = {
  password: '',
  confirmPassword: '',
};

export default function ChangePassword() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#775cb4'}}>
      <AppStatusBar backgroundColor="white" barStyle="dark-content"  />
      <View style={{ height: '30%'}}>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              fontFamily: 'sans-serif-condensed',
              paddingBottom: 20,
            }}>
            Change Password
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: '70%',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View style={styles.formContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={values => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <View>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center'}}>
                      <Ionicons name="lock-closed-outline" size={25} />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        type="flat"
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
                  <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center'}}>
                      <Ionicons name="lock-closed-outline" size={25} />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        type="flat"
                        name="confirmPassword"
                        label="Confirm Password"
                        style={styles.textInput}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
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
                  {errors.confirmPassword && (
                    <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                      {errors.confirmPassword}
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
                    SUBMIT
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
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
    borderRadius:50,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
  },
  loginButton: {
    marginTop: 20,
  },
  forgetPassword: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});
