import React from 'react'
import { Text, FlatList, View, SafeAreaView, ImageSourcePropType, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { API_URL } from '../../../config';

type promoListProps = {
    promoList: any
}

type listStyleProps = {
    image: string,
    shopName: string,
    promotionName: string,
    Address: string,
    originalPrice: number,
    promotionPrice: number,
    detail: string,
    location: string
}

const ListStyle = ({image, shopName, promotionName, Address, originalPrice, promotionPrice, detail, location}: listStyleProps) => {
    return (
        <View style={styles.listStyle}>
            <View style={styles.listBox}>
                <View>
                    <Image style={styles.imageStyle} source={{uri: image}} />
                    <Text style={styles.locationText}>{location}</Text>
                </View>
                <View style={styles.labelContainer}>
                    <View>
                        <View style={styles.labelLine}>
                            <Text style={styles.labelStyle}>Promotion Name</Text>
                            <Text style={styles.labelStyle}>{promotionName}</Text>
                        </View>
                        <View style={styles.labelLine}>
                            <Text style={styles.labelStyle}>Shop Name</Text>
                            <Text style={styles.labelStyle}>{shopName}</Text>
                        </View>
                        <View style={styles.labelLine}>
                            <Text style={styles.labelStyle}>Address</Text>
                            <Text style={styles.labelStyle}>{Address}</Text>
                        </View>
                        <View style={styles.labelLine}>
                            <Text style={styles.labelStyle}>Original Price</Text>
                            <Text style={{...styles.labelStyle, fontWeight: '600'}}>{originalPrice} MMK</Text>
                        </View>
                        <View style={styles.labelLine}>
                            <Text style={styles.labelStyle}>Discount Price</Text>
                            <Text style={{...styles.labelStyle, fontWeight: '600'}}>{promotionPrice} MMK</Text>
                        </View>
                </View>
                    <View style={styles.readMoreBtn}>
                        <TouchableOpacity>
                            <Text style={styles.readMoreText}>
                                Read More
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

function PromotionListComponent({promoList}: promoListProps) {
  return (
    <View style={styles.listContainer}>
        <FlatList
        data={promoList}
        renderItem={({item}) => 
        <ListStyle 
        image={item.promo_photo}
        shopName={item.shop.name} 
        promotionName={item.promo_name} 
        Address={item.shop.division_name} 
        originalPrice={item.promo_price * item.promo_percentage}
        promotionPrice={item.promo_price}
        detail={item.promo_detail}
        location={`${item.shop.region_name}(${item.shop.division_name})`}
        />
        }
        keyExtractor={item => item.id}
        onEndReachedThreshold={1}
        />
    </View>
  )
}

export default PromotionListComponent

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 30
    },
    listStyle: {
        marginBottom: 15,
    },
    imageStyle:{
        width: 130,
        height: 110,
        borderRadius: 10
    },
    listBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    locationText: {
        maxWidth: 130,
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 5
    },
    labelContainer: {
        flex: 1,
        marginLeft: 12
    },
    labelLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    labelStyle: {
        maxWidth: '50%',
        fontSize: 12,
        fontWeight: '400'
    },
    readMoreBtn: {
        paddingTop: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    readMoreText: {
        fontSize: 12,
        fontWeight: '600',
        borderWidth: 1,
        borderColor: '#8C0052',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5
    }
})