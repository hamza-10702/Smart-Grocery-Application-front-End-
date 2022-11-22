import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Cart({navigation}) {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 60, width: 60}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
            justifyContent: 'center',
            // backgroundColor: 'green'
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 12, color: 'grey'}}>{item.ingredients}</Text>
        </View>

        <View style={{alignItems: 'center' }}>
          <View style={style.actionContainer}>
            <TouchableOpacity
              disabled={item.quantity == 1}
              style={[
                style.actionBtn,
                {backgroundColor: item.quantity > 1 ? '#447b7b' : '#D3D3D3'},
              ]}>
              <View>
                <Icon name="remove" size={20} color="white" />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                width: 50,
                textAlign: 'center',
              }}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              style={[style.actionBtn, {backgroundColor: '#447b7b'}]}>
              <View>
                <Icon name="add" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
            Rs { (item.price * item.quantity).toFixed(2) }
          </Text>
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
      quantity: 1,
      image: require('../assets/images/c1.jpg'),
    },
    {
      id: '2',
      name: 'Cheese Pizza',
      ingredients: 'Cheese Pizza',
      price: '7.10',
      quantity: 4,
      image: require('../assets/images/c2.jpg'),
    },
    {
      id: '3',
      name: 'Chicken Burger',
      ingredients: 'Fried Chicken',
      price: '5.10',
      quantity: 2,
      image: require('../assets/images/c3.jpg'),
    },
    {
      id: '4',
      name: 'Meat Pizza',
      ingredients: 'Mixed Pizza',
      price: '8.30',
      quantity: 1,
      image: require('../assets/images/c1.jpg'),
    },
    {
      id: '5',
      name: 'Cheese Pizza',
      ingredients: 'Cheese Pizza',
      price: '7.10',
      quantity: 1,
      image: require('../assets/images/c2.jpg'),
    },
    {
      id: '6',
      name: 'Chicken Burger',
      ingredients: 'Fried Chicken',
      price: '5.10',
      quantity: 1666,
      image: require('../assets/images/c3.jpg'),
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              {/* <button title="CHECKOUT" /> */}
            </View>
          </View>
        )}
      />
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
  cartCard: {
    height: 80,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionContainer: {
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
  },
  actionBtn: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    // marginHorizontal: 20,
  },
});
