import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppStatusBar from '../components/AppStatusBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('screen');
const cardWidth = width / 3 - 20;

export default function DashBoard() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    const categories = [
      {
        id: '1',
        name: 'pizza',
        image: require('../assets/images/c1.jpg'),
      },
      {
        id: '2',
        name: 'Burger',
        image: require('../assets/images/c1.jpg'),
      },
      {
        id: '3',
        name: 'Sushi',
        image: require('../assets/images/c1.jpg'),
      },
      {
        id: '4',
        name: 'Salad',
        image: require('../assets/images/c1.jpg'),
      },
    ];

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? 'red' : 'green',
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{
                    height: 35,
                    width: 35,
                    resizeMode: 'cover',
                    borderRadius: 35 / 2,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color: selectedCategoryIndex == index ? 'white' : 'black',
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor="white"
        activeOpacity={0.9}
        // onPress={() => navigation.navigate('DetailsScreen', food)}
      >
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -20}}>
            <Image
              source={food.image}
              style={{height: 80, width: 80, borderRadius: 80 / 2}}
            />
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${food.price}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={[style.addToCartBtn, {backgroundColor: 'red'}]}>
              <Icon name="add" size={18} color="white" />
            </View>
            <View style={[style.addToCartBtn, {backgroundColor: 'green'}]}>
              <Icon name="compare" size={18} color="white" />
            </View>
          </View>
        </View>
      </TouchableHighlight>
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
    {
      id: '4',
      name: 'Meat Pizza',
      ingredients: 'Mixed Pizza',
      price: '8.30',
      image: require('../assets/images/c1.jpg'),
    },
    {
      id: '5',
      name: 'Cheese Pizza',
      ingredients: 'Cheese Pizza',
      price: '7.10',
      image: require('../assets/images/c2.jpg'),
    },
    {
      id: '6',
      name: 'Chicken Burger',
      ingredients: 'Fried Chicken',
      price: '5.10',
      image: require('../assets/images/c3.jpg'),
    },
  ];
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={style.header}>
          <View>
            <Text style={{marginTop: 5, fontSize: 22, color: 'grey'}}>
              Yahan per slider aaega
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={style.inputContainer}>
            <Icon name="search" size={28} />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              placeholder="Search for food"
            />
          </View>
          <View style={style.sortBtn}>
            <Ionicons name="scan-outline" size={28} color="white" />
          </View>
        </View>
        <View>
          <ListCategories />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={foods}
          renderItem={({item}) => <Card food={item} />}
          key={'_'}
          keyExtractor={item => '_' + item.id}
          numColumns={3}
        />
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 200,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
  },
  addToCartBtn: {
    height: 25,
    width: 25,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
