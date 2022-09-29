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
import {TextInput, Button} from 'react-native-paper';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginValidationSchema} from '../../Schema/index';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/login/Header';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.formInputWraper}>
        <KeyboardAvoidingView style={styles.formContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
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
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
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
                    <Text style={{fontSize: 10, color: 'red'}}>
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
                    onPress={() => console.log('Pressed')}>
                    LOGIN
                  </Button>
                </View>
                <View style={styles.forgetPassword}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('Forget Password');
                    }}>
                    <Text style={{fontWeight: 'bold'}}>Forget Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formInputWraper: {
    borderColor: 'none',
    borderRadius: 5,
    marginVertical: 40,
    width: '100%',

    flex: 1,
    alignSelf: 'center',
  },
  formContainer: {
    borderColor: 'gray',
    alignSelf: 'center',
    height: 200,
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
    backgroundColor: 'red',
  },
  forgetPassword: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});


{/* <Button
mode="Contained"
color="black"
contentStyle={{height: 44}}
labelStyle={{fontSize: 18}}
onPress={handleSubmit}
style={{marginVertical: 10}}
disabled={!isValid}>
SIGN UP
</Button> */}