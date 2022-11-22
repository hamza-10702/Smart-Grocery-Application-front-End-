import React, {useEffect, useState} from 'react';
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
import {Button} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStatusBar from '../components/AppStatusBar';
const {width} = Dimensions.get('screen');
import {LineChart} from 'react-native-chart-kit';
const cardWidth = width - 20;

export default function AboutItem({navigation, route}) {
  const item = route.params;

  // const [xAxisData, setXAxisData] = useState([]);
  // const [yAxisData, setYAxisData] = useState([]);

  const [foods, setFoods] = useState([
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
  ]);

  const extractData = () => {};
  useEffect(() => {
    extractData();
  }, []);

  const ChartSection = () => {
    return (
      <View>
        {foods.length > 0 ? (
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 10,
              borderColor: '#E5E5E5',
              width: cardWidth,
              borderWidth: 1,
              borderRadius: 15,
              backgroundColor: '#E5E5E5',
              alignSelf: 'center',
              elevation: 3,
              marginBottom: 10,
            }}>
            <View
              style={{
                marginHorizontal: 15,
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#054f4f',
                }}>
                PRODUCTS COMPARISON
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LineChart
                data={{
                  labels: foods.map(item => {
                    return item.ingredients;
                  }),
                  datasets: [
                    {
                      data: foods.map(item => {
                        return item.price;
                      }),
                    },
                  ],
                  legend: ['Product Price'], // optional
                }}
                width={Dimensions.get('window').width - 40} // from react-native
                height={200}
                // fromZero = {true}
                yAxisLabel="Rs."
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#508484',
                  backgroundGradientFrom: '#508484',
                  backgroundGradientTo: '#9bb9b9',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '4',
                    strokeWidth: '2',
                    stroke: '#054f4f',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
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
                  color="#054f4f"
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 10}}>
        <View>
          <ChartSection />
        </View>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            borderColor: '#E5E5E5',
            width: cardWidth,
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: '#E5E5E5',
            alignSelf: 'center',
            elevation: 3,
            marginBottom: 10,
          }}>
          <View
            style={{
              marginHorizontal: 15,
              // marginVertical: 20,
              marginTop: 20,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#054f4f',
              }}>
              AVAILABLE PRODUCTS
            </Text>
            <Text>In Different Platform:</Text>
          </View>
          <View>
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
          <View
            style={{
              // marginHorizontal: 60,
              marginVertical: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Button
              style={{
                backgroundColor: '#054f4f',
                borderRadius: 30,
                width: '50%'
              }}
              mode="contained"
              onPress={() => {
                console.log('CART');
              }}>
              ADD TO CART
            </Button>
          </View>
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
    color: '#054f4f',
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
    elevation: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 200,
    // height: 50,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
