import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    BackHandler,
    TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import {
    FlatList,
    ScrollView,
    TextInput,
} from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getAllOrder, updateOrder } from '../services/orderLocalStore'
import { SwipeListView } from 'react-native-swipe-list-view';
import { DataTable } from 'react-native-paper';
import { products } from '../utils/food'

const optionsPerPage = [2, 3];



function ProductComparision({ navigation }) {



    const [metro, setMetro] = useState(products)
    const [companyM, setCompanyM] = useState([])
    const [companyN, setCompanyN] = useState([])
    const [companyC, setCompanyC] = useState([])
    const [companyS, setCompanyS] = useState([])

    const [total, setTotal] = useState({
        metroTotal: undefined,
        naheedTotal: undefined,
        carreTotal: undefined,
        smartTotal: undefined
    })


    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    const removeOther = () => {
        let metroComapny = []
        let naheedComapny = []
        let carreComapny = []

        products.map((product, index) => {
            for (let i = 0; i < product.productCompany.length; i++) {
                // console.log(product.productCompany[i])
                if (product.productCompany[i].companyName === 'Metro Online') {
                    metroComapny.push({
                        productID: product._id,
                        productName: product.productName,
                        productCompany: product.productCompany[i].companyName,
                        productPrice: product.productCompany[i].companyPrice,
                        productStoke: product.productCompany[i].companyProductStock,
                        productImage: product.productImage,
                        productCategory: product.productCategory,
                        productQuantity: index + 1,
                    })
                }
                else if (product.productCompany[i].companyName === 'Naheed') {
                    naheedComapny.push({
                        productID: product._id,
                        productName: product.productName,
                        productCompany: product.productCompany[i].companyName,
                        productPrice: product.productCompany[i].companyPrice,
                        productStoke: product.productCompany[i].companyProductStock,
                        productImage: product.productImage,
                        productCategory: product.productCategory,
                        productQuantity: index + 1,
                    })
                }
                else if (product.productCompany[i].companyName === 'Carrefour') {
                    carreComapny.push({
                        productID: product._id,
                        productName: product.productName,
                        productCompany: product.productCompany[i].companyName,
                        productPrice: product.productCompany[i].companyPrice,
                        productStoke: product.productCompany[i].companyProductStock,
                        productImage: product.productImage,
                        productCategory: product.productCategory,
                        productQuantity: index + 1,
                    })
                }
            }

        })




        setCompanyM(metroComapny)
        setCompanyN(naheedComapny)
        setCompanyC(carreComapny)

        const metroTotal = metroComapny.map(item => item.productPrice * item.productQuantity).reduce((prev, next) => prev + next)
        console.log(metroTotal)
        const naheedTotal = naheedComapny.map(item => item.productPrice * item.productQuantity).reduce((prev, next) => prev + next)
        console.log(naheedTotal)
        const carreTotal = carreComapny.map(item => item.productPrice * item.productQuantity).reduce((prev, next) => prev + next)
        console.log(carreTotal)

        setTotal({ metroTotal: metroTotal, naheedTotal: naheedTotal, carreTotal: carreTotal })


    }

    useEffect(() => {
        removeOther()
    }, [])

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    return (

        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Products Analysis </Text>
            </View>
           


                
                    <ScrollView style={{ marginTop: 20 }}
                    showsVerticalScrollIndicator={false}
                    >
                       
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <DataTable >

                                <DataTable.Header >
                                    <DataTable.Title style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Product Image</Text>


                                    </DataTable.Title>
                                    <DataTable.Title style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Product Name</Text>

                                    </DataTable.Title>

                                    <DataTable.Title style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Metro Company</Text>
                                    </DataTable.Title>


                                    <DataTable.Title style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Naheed Company</Text>
                                    </DataTable.Title>


                                    <DataTable.Title style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Carrefour Company</Text>

                                    </DataTable.Title>


                                </DataTable.Header>

                                {metro.map((items) => {
                                    return (
                                        <DataTable.Row

                                            style={{ height: 60 }}
                                            key={items._id}>
                                            <DataTable.Cell style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{
                                                    height: '100%',
                                                }}>
                                                    <Image source={{ uri: items.productImage }} style={{ height: 60, width: 60 }} />
                                                </View>
                                            </DataTable.Cell>
                                            <DataTable.Cell style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
                                                <View
                                                    style={{

                                                        width: 150,



                                                    }}
                                                >

                                                    <Text  >
                                                        {items.productName}
                                                    </Text>
                                                </View>

                                            </DataTable.Cell>
                                            {companyM?.map((metro, index) => {
                                                if (items.productName === metro.productName) {
                                                    return (
                                                        <React.Fragment key={metro._id + 1} >

                                                            <DataTable.Cell style={{ width: 70, paddingLeft: 70, justifyContent: 'center', alignItems: 'center' }}>
                                                                <View style={{
                                                                    width: 100,
                                                                    justifyContent: 'center', alignItems: 'center',
                                                                }}>
                                                                    <Text >
                                                                        {metro.productPrice}
                                                                    </Text>
                                                                </View>
                                                            </DataTable.Cell>
                                                            {/* <DataTable.Cell numeric>{metro.productQuantity}</DataTable.Cell>
                                                            <DataTable.Cell numeric>{metro.productPrice * metro.productQuantity}</DataTable.Cell> */}
                                                        </React.Fragment>
                                                    )
                                                }
                                            })}
                                            {companyN?.map((naheed, index) => {
                                                if (items.productName === naheed.productName) {
                                                    return (
                                                        <React.Fragment key={naheed._id + 1}>

                                                            <DataTable.Cell style={{ width: 70, paddingLeft: 40, justifyContent: 'center', alignItems: 'center' }}>
                                                                <View style={{
                                                                    width: 100,
                                                                    justifyContent: 'center', alignItems: 'center',
                                                                }}>
                                                                    <Text >
                                                                        {naheed.productPrice}
                                                                    </Text>
                                                                </View>
                                                            </DataTable.Cell>
                                                            {/* <DataTable.Cell numeric>{naheed.productQuantity}</DataTable.Cell> */}
                                                            {/* <DataTable.Cell numeric>{naheed.productPrice * naheed.productQuantity}</DataTable.Cell> */}
                                                        </React.Fragment>
                                                    )
                                                }
                                            })}
                                            {companyC?.map((carre, index) => {
                                                if (items.productName === carre.productName) {
                                                    return (
                                                        <React.Fragment key={carre._id + 1}>

                                                            <DataTable.Cell style={{
                                                                width: 70,
                                                                paddingLeft: 70,
                                                                justifyContent: 'center', alignItems: 'center',
                                                            }}>
                                                                <View
                                                                    style={{
                                                                        width: 100,
                                                                        justifyContent: 'center', alignItems: 'center',
                                                                    }}>
                                                                    <Text >
                                                                        {carre.productPrice}
                                                                    </Text>
                                                                </View>
                                                            </DataTable.Cell>
                                                            {/* <DataTable.Cell numeric>{carre.productQuantity}</DataTable.Cell> */}
                                                            {/* <DataTable.Cell numeric>{carre.productPrice * carre.productQuantity}</DataTable.Cell> */}
                                                        </React.Fragment>
                                                    )
                                                }
                                            })}

                                        </DataTable.Row>


                                    )

                                })

                                }

                                <DataTable.Row>
                                    <DataTable.Cell style={{
                                        width: 10,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <View style={{
                                            width: 100,
                                            justifyContent: 'center', alignItems: 'center',
                                        }}>
                                            <Text>
                                            </Text>
                                        </View>
                                    </DataTable.Cell>

                                    <DataTable.Cell style={{
                                        width: 10,
                                        
                                    }}>
                                        <View style={{
                                            width: 100,
                                            
                                        }}>
                                            <Text style={{fontWeight: "bold", fontSize: 15}}>
                                                Total
                                            </Text>
                                        </View>
                                    </DataTable.Cell>

                                    <DataTable.Cell style={{
                                        width: 10,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <View style={{
                                            width: 100,
                                            justifyContent: 'center', alignItems: 'center',
                                        }}>
                                           <Text style={{fontWeight: "bold", fontSize: 15}}>
                                           Rs. {total.metroTotal}
                                            </Text>
                                        </View>
                                    </DataTable.Cell>

                                    <DataTable.Cell style={{
                                        width: 10,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <View style={{
                                            width: 100,
                                            justifyContent: 'center', alignItems: 'center',
                                        }}>
                                            <Text style={{fontWeight: "bold", fontSize: 15}}>
                                            Rs. {total.naheedTotal}

                                            </Text>
                                        </View>
                                    </DataTable.Cell>

                                    <DataTable.Cell style={{
                                        width: 10,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <View style={{
                                            width: 100,
                                            justifyContent: 'center', alignItems: 'center',
                                            paddingLeft: 40,
                                        }}>
                                            <Text style={{fontWeight: "bold", fontSize: 15}}>
                                            Rs. {total.carreTotal} 

                                            </Text>
                                        </View>
                                    </DataTable.Cell>
                                   
                                </DataTable.Row>
                            </DataTable>
                        </ScrollView>
                    </ScrollView>

               
           

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },

});


export default ProductComparision