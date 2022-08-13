import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import FormContainer from './FormContainer';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {TextInput, Button} from 'react-native-paper';
import * as yup from 'yup';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const initialValues = {
  email: '',
  password: '',
};

const signUpValidationSchema = yup.object().shape({
  // fullName: yup
  //   .string()
  //   .matches(/(\w.+\s).+/, 'Enter at least 2 names')
  //   .required('Full name is required'),
  // phoneNumber: yup
  //   .string()
  //   .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
  //   .required('Phone number is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords do not match')
  //   .required('Confirm password is required'),
});
export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <FormContainer>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View
            style={{
              padding: 10,
              width: 350,
              backgroundColor: 'wheat',
              alignSelf: 'center',
              paddingTop: 0,
              borderRadius: 20,
              marginTop: 20,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Ionicons
                  name="person-outline"
                  size={24}
                  style={{color: 'black', alignSelf: 'center'}}
                />
                <TextInput
                  label="Email"
                  mode="flat"
                  style={{backgroundColor: 'none', width: '90%'}}
                  activeUnderlineColor="black"
                  name="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
              </View>
              {errors.email && touched.email ? (
                <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                  {errors.email}
                </Text>
              ) : null}
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Ionicons
                  name="key-outline"
                  size={24}
                  style={{color: 'black', alignSelf: 'center'}}
                />
                <TextInput
                  label="Password"
                  mode="flat"
                  secureTextEntry={passwordVisible}
                  style={{backgroundColor: 'none', width: '90%'}}
                  activeUnderlineColor="black"
                  right={
                    <TextInput.Icon
                      name={passwordVisible ? 'eye-off' : 'eye'}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  }
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
              </View>
              {errors.password && touched.password ? (
                <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                  {errors.password}
                </Text>
              ) : null}
            </View>

            <Button
              mode="Contained"
              color="black"
              contentStyle={{height: 44}}
              labelStyle={{fontSize: 18}}
              onPress={handleSubmit}
              style={{marginVertical: 10}}
              disabled={!isValid}>
              SIGN UP
            </Button>
          </View>
        )}
      </Formik>
    </FormContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
