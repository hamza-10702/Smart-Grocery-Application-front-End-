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
import TopSearchBar from '../components/TopSearchBar';
import FloatingButton from '../components/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('screen');
const cardWidth = width / 3 - 20;
const searchInputWidth = width / 1.4;

export default function DashBoard({navigation, route}) {
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
        onPress={() => navigation.navigate('AboutItem', food)}>
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
          {/* <TouchableHighlight
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          underlayColor="#E5E5E5"
          activeOpacity={0.9}
          onPress={() => navigation.navigate('AboutItem', food)}>
          <Text style={{borderColor: 'black', borderrWidth: 1}}>CART</Text>*/}
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
    {
      id: '7',
      name: 'Meat Pizza',
      ingredients: 'Mixed Pizza',
      price: '8.30',
      image: require('../assets/images/c1.jpg'),
    },
    {
      id: '8',
      name: 'Cheese Pizza',
      ingredients: 'Cheese Pizza',
      price: '7.10',
      image: require('../assets/images/c2.jpg'),
    },
    {
      id: '9',
      name: 'Chicken Burger',
      ingredients: 'Fried Chicken',
      price: '5.10',
      image: require('../assets/images/c3.jpg'),
    },
  ];

  const [searchText, setSearchText] = useState('');

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={style.header}>
          <Ionicons name="menu-outline" size={28} onPress={openDrawer} />
          <View style={style.inputContainer}>
            <Icon name="search" size={20} />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              placeholder="Search grocery"
              onChangeText={text => {
                setSearchText(text);
              }}
              value={searchText}
            />
            {searchText ? (
              <TouchableOpacity onPress={() => setSearchText('')}>
                <View>
                  <Ionicons
                    name="md-close-circle-sharp"
                    size={20}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={{marginLeft: 5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <View>
                <Ionicons name="cart-outline" size={30} color="red" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.imageSlider}>
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
          {/* <View style={style.sortBtn}>
            <Ionicons name="scan-outline" size={28} color="white" />
          </View> */}
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
        <FloatingButton openScanList={() => navigation.navigate('Cart')} />
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'red',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  inputContainer: {
    // flex: 2,
    width: searchInputWidth,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  imageSlider: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    height: 150,
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
