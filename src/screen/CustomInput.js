import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('screen');
const cardWidth = width;

const checkInput = [
  {
    key: 0,
    value: 'Aaloo',
  },
  {
    key: 1,
    value: 'Cheese',
  },
  {
    key: 2,
    value: 'Tomatoo',
  },
  {
    key: 3,
    value: 'Onion',
  },
  {
    key: 4,
    value: 'Peanuts',
  },
  {
    key: 5,
    value: 'Bhaji',
  },
  {
    key: 0,
    value: 'Aaloo',
  },
  {
    key: 1,
    value: 'Cheese',
  },
  {
    key: 2,
    value: 'Tomatoo',
  },
  {
    key: 3,
    value: 'Onion',
  },
  {
    key: 4,
    value: 'Peanuts',
  },
  {
    key: 5,
    value: 'Bhaji',
  },
];
export default function CustomInput() {
  const [inputs, setInputs] = useState([]);

  const addHandler = () => {
    const input = [];
    checkInput.map(value => {
      input.push(value);
    });
    setInputs(input);
  };

  const deleteHandler = key => {
    const input = inputs.filter((input, index) => index != key);
    setInputs(input);
  };

  const inputHandler = (text, key) => {
    const input = [...inputs];
    input[key].value = text;
    input[key].key = key;
    setInputs(input);
  };

  useEffect(() => {
    addHandler();

    return () => {
      setInputs([]);
    };
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text
            style={{
              marginHorizontal: 15,
              color: '#054f4f',
              fontSize: 18,
              fontFamily: 'sans-serif-condensed',
              fontWeight: '700',
            }}>
            Searched Products:
          </Text>
          {inputs.length > 0 ? (
            inputs.map((input, key) => {
              return (
                <View
                  key={key}
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    alignSelf: 'center',
                    //   paddingVertical: 20,
                    flexDirection: 'row',
                  }}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter Product"
                    //   label="Email"
                    mode="outlined"
                    theme={{
                      colors: {
                        primary: '#054f4f',
                        underlineColor: '#054f4f',
                        background: 'white',
                      },
                      roundness: 10,
                    }}
                    value={input.value}
                    onChangeText={text => inputHandler(text, input.key)}
                  />

                  <TouchableOpacity
                    style={{
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}
                    onPress={() => deleteHandler(key)}>
                    <View>
                      <Icon name="delete-outline" size={30} color="#054f4f" />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <View>
              <Text
                style={{
                  marginHorizontal: 15,
                  marginVertical: 20,
                  color: 'red',
                  fontSize: 16,
                  alignSelf: 'center',
                }}>
                No Product Found:
              </Text>
            </View>
          )}
        </View>
        {inputs.length > 0 ? (
          <Button
            style={{
              backgroundColor: '#054f4f',
              borderRadius: 30,
              width: '50%',
              alignSelf: 'center',
              marginBottom: 10,
            }}
            mode="contained"
            onPress={() => {
              console.log('CART');
            }}>
            ADD TO CART
          </Button>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    // borderColor: '#E5E5E5',
    width: cardWidth,
    // borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    // elevation: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    color: 'black',
    width: '85%',
  },
});
