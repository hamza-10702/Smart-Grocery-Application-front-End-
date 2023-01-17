import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default function ListScan() {
  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Waiting</Text>
    </View>
  );

  takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };

  return (
    <View style={styles.container}>
     {/* 
        All Search product code




         return (
            <Pressable
                underlayColor="white"
                activeOpacity={0.9}
                onPress={() => navigation.navigate('AboutItem', item)}>
                <View style={style.cartCard}>
                    <Image source={{ uri: item.productImage }} style={{ height: 60, width: 60 }} />
                    <View
                        style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                            justifyContent: 'center',
                            // backgroundColor: 'green'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.productName}</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>{item.productCategory}</Text>
                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                        <Pressable
                            style={[style.actionBtn]}
                            activeOpacity={0.8}
                            onPress={() => {
                                console.log("SS")

                                const removeItem = allSearchProducts.filter((element) => element._id != item._id)
                                setAllSearchProducts(removeItem)
                            }}>
                            <View>
                                <Icon name="close" size={20} color="red" />
                            </View>
                        </Pressable>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>

                            Rs {minPrice}
                        </Text>
                    </View>
                </View>
            </Pressable>
        );
     */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
