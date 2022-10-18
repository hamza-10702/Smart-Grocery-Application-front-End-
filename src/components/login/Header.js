import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Image,
  Pressable,
} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppStatusBar from '../AppStatusBar';

export default function Header({name}) {
  const navigation = useNavigation();

  return (
    <View style={styles.contianer}>
      <AppStatusBar backgroundColor='white'  barStyle="dark-content" />
      <View style={styles.headerButton}>
        <Button
          mode="Outlined"
          style={{
            borderWidth: 1,
            borderColor: '#054f4f',
            borderRadius: 50,
          }}
          color="#054f4f"
          onPress={() => {
            if (name == 'Login') {
              navigation.navigate('Login');
            } else {
              navigation.navigate('Register');
            }
          }}>
          <Text style={styles.headerButtonText}>{name}</Text>
        </Button>
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
    // marginTop: 30,
    height: 260,
  },

  headerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    alignItems: 'center',
  },
  headerButtonText: {
    color: '#054f4f',
    fontSize: 15,
    fontWeight: '700',
  },
  headerImage: {
    width: '70%',
    height: 180,
    borderRadius: 10,
    alignSelf: 'center',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
