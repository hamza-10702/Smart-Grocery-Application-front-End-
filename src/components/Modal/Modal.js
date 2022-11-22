import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput, Button} from 'react-native-paper';
import {loginValidationSchema} from '../../Schema/index';
import AppStatusBar from '../AppStatusBar';

const initialValues = {
  email: '',
  password: '',
};
export default function ModalNative(props) {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={[styles.centeredView]}>
      <AppStatusBar
        backgroundColor="#00000099"
        barStyle="dark-content"
        hidden={false}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}>
        <View
          style={[
            styles.centeredView,
            {
              justifyContent: props.positionHorizontal,
              alignItems: props.positionVertical,
            },
          ]}>
          {props.children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#00000099',
  },
});
