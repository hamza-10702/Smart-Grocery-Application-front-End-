import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Image,
} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.contianer}>
      <View style = {styles.headerButton}>
        <Text style = {styles.headerButtonText}>Login</Text>
      </View>
      <View>
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/header-image.jpg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    contianer: {
        height: 260,
    },

    headerButton: {
      flex: 1,
      flexDirection : 'row',
      justifyContent: 'flex-end',
      marginRight: 20,
      alignItems: 'center'

    },
    headerButtonText: {
        fontSize: 20,
        fontWeight: '700'
    },
    headerImage :{
        width: '70%',
         height: 200,
         borderRadius: 10,
         alignSelf: 'center'
    }

});
