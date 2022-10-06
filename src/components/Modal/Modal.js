import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput, Button} from 'react-native-paper';
import {loginValidationSchema} from '../../Schema/index';

const initialValues = {
  email: '',
  password: '',
};
export default function ModalNative(props) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  //   const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View 
            style = {{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                height: 50,
                margin: 0,
                backgroundColor: '#054f4f',
                borderRadius: 20,
                borderBottomRightRadius: 35,
                borderBottomLeftRadius: 35
            }}
            >
              <Text style={styles.modalText}>Enter your Email!</Text>
            </View>
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
                          <Ionicons name="mail-outline" size={20} />
                        </View>
                        <View style={{flex: 1}}>
                          <TextInput
                            type="contained"
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
                        <Text
                          style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                          {errors.email}
                        </Text>
                      )}
                    </View>
                    <View style={styles.submitButtonCenter}>
                      <Pressable
                        style={[styles.button, styles.buttonSubmit]}
                        onPress={() => props.setModalVisible(false)}>
                        <Text style={styles.textStyle}>Submit</Text>
                      </Pressable>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
            <View style={{marginTop: 80}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.setModalVisible(false)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modalView: {
    height: 350,
    width: 350,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // paddingVertical: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 100,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  buttonSubmit: {
    backgroundColor: '#054f4f',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  formContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    alignSelf: 'center',
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
    // marginTop: 10,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
  },
  submitButtonCenter: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});
