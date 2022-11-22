import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import TopSearchBar from '../components/TopSearchBar';
import {FloatingAction} from 'react-native-floating-action';
import FloatingButton from '../components/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStatusBar from '../components/AppStatusBar';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('screen');
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useScanListMutation} from '../services/userAuthentication';
import {useAllProductQuery} from '../services/userAuthentication';
const cardWidth = width / 3 - 20;
const searchInputWidth = width / 1.4;
import {foods} from '../utils/food';
import {categories} from '../utils/categories';

export default function DashBoard({navigation, route}) {
  const [searchText, setSearchText] = useState('');

  const openDrawer = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    console.log('Camera');
  });

  const actions = [
    {
      text: 'Use Camera',
      icon: <Ionicons name="camera-outline" size={20} color="white" />,
      name: 'use_Camera',
      position: 2,
      color: '#054f4f',
      textColor: '#054f4f',
      textElevation: 10,
    },
    {
      text: 'Use Gallery',
      icon: <Ionicons name="image-outline" size={20} color="white" />,
      name: 'use_Gallery',
      position: 1,
      color: '#054f4f',
      textColor: '#054f4f',
      textElevation: 10,
    },
  ];

  const [FloatingButtonText, setFloatingButtonText] = useState('SCAN');

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
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <AppStatusBar
          backgroundColor={
            FloatingButtonText === 'SCAN' ? 'white' : '#00000099'
          }
          barStyle="dark-content"
          hidden={FloatingButtonText === 'SCAN' ? false : true}
        />
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
                    color="#054f4f"
                  />
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={{marginLeft: 5}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <View>
                <Ionicons name="cart-outline" size={30} color="#054f4f" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#054f4f">
            <View style={style.slide}>
              <Image
                source={require('../assets/images/c1.jpg')}
                resizeMode="cover"
                style={style.sliderImage}
              />
            </View>
            <View style={style.slide}>
              <Image
                source={require('../assets/images/c2.jpg')}
                resizeMode="cover"
                style={style.sliderImage}
              />
            </View>
            <View style={style.slide}>
              <Image
                source={require('../assets/images/c3.jpg')}
                resizeMode="cover"
                style={style.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}></View>
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
        <FloatingAction
          listenKeyboard={false}
          floatingIcon={
            <Text style={{color: 'white'}}>{FloatingButtonText}</Text>
          }
          showBackground={true}
          color="#054f4f"
          actions={actions}
          onOpen={() => {
            setFloatingButtonText('CLOSE');
          }}
          onClose={() => {
            setFloatingButtonText('SCAN');
          }}
          onPressItem={name => {
            if (name === 'use_Camera') {
              navigation.navigate('ScanImage' , 'camera');
            } else if (name === 'use_Gallery') {
              navigation.navigate('ScanImage' , 'gallery');
            }
          }}
          onPressMain={() => {
            // setFloatButtonClick(!floatButtonClick);
            console.log(`Main Button`);
          }}
        />
      </SafeAreaView>
    </>
  );
}

const ListCategories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
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
                selectedCategoryIndex == index ? '#125858' : '#82a7a7',
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
    // paddingTop: 30,
    paddingBottom: 10,
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

  sliderContainer: {
    height: 200,
    width: '90%',
    // marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
