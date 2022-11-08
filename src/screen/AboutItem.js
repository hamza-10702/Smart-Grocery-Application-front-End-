import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStatusBar from '../components/AppStatusBar';
const {width} = Dimensions.get('screen');
const cardWidth = width - 20;

export default function AboutItem({navigation, route}) {
  const item = route.params;

  const ComparePriceCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: 'grey'}}>{item.ingredients}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color="white" />
            <Icon name="add" size={25} color="white" />
          </View>
        </View>
      </View>
    );
  };
  const foods = [
    {
      id: '1',
      name: 'Meat Pizza',
      ingredients: 'Mixed Pizza',
      price: '8.30',
      image: require('../assets/images/c1.jpg'),
    },
    {
      id: '2',
      name: 'Cheese Pizza',
      ingredients: 'Cheese Pizza',
      price: '7.10',
      image: require('../assets/images/c2.jpg'),
    },
    {
      id: '3',
      name: 'Chicken Burger',
      ingredients: 'Fried Chicken',
      price: '5.10',
      image: require('../assets/images/c3.jpg'),
    },
  ];
  return (
    <SafeAreaView>
      <View>
        <AppStatusBar
          hidden={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 220,
              backgroundColor: 'white',
            }}>
            <ImageBackground
              source={item.image}
              style={{height: '100%', width: '100%', marginTop: 1}}>
              <View style={style.crossBackBtn}>
                <Ionicons
                  name="close"
                  size={28}
                  color="#F9813A"
                  onPress={navigation.goBack}
                />
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingTop: 10,
              paddingBottom: 6,
            }}>
            <View>
              <Text style={style.itemName}>{item.name}</Text>
              <Text style={style.itemCompany}>{item.ingredients}</Text>
            </View>
            <Text style={style.itemPrice}>{`Min Rs. ${item.price}`}</Text>
          </View>
          <View>
            <View
              style={{
                borderBottomColor: 'white',
                borderWidth: 0.5,
                width: '90%',
                alignSelf: 'center',
              }}></View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            // borderColor: '#c4c9d0',
            height: 300,
            width: cardWidth,
            // borderWidth: 1,
            borderRadius: 15,
            // backgroundColor: '#c4c9d0',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1}}>
            {foods.map((item, index) => {
              return (
                <View key={index} style={style.cartCard}>
                  <Image
                    source={item.image}
                    style={{height: 50, width: 50, borderRadius: 60 / 2}}
                  />
                  <View
                    style={{
                      height: 100,
                      marginLeft: 10,
                      paddingVertical: 20,
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 14}}>
                        {item.name}
                      </Text>
                      <Text style={{fontSize: 12, color: 'grey'}}>
                        {item.ingredients}
                      </Text>
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Rs.{item.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}></View>
                </View>
              );
            })}
          </View>
          
        </View>
        <View style={{
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center'
            // marginVertical: 20,
          }}>
            <TouchableOpacity>
              <View style={style.actionBtn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: 'red',
                  }}>{`Cart`}</Text>
              </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  crossBackBtn: {
    margin: 20,
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {color: 'white', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: 'green',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
    marginVertical: 10,
    marginTop: 0,
  },
  itemCompany: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: 'gray',
    marginLeft: 15,
    marginVertical: 10,
    marginTop: -10,
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 15,
    marginVertical: 10,
    color: 'black',
    marginLeft: 15,
    marginTop: -20,
  },
  cartCard: {
    height: 80,
    // elevation: 3,
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 200,
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
