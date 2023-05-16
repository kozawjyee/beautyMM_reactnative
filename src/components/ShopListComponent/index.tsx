import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ImageSourcePropType, Image, StyleSheet} from 'react-native'
import { getShopList } from '../../services/shopServices';

function ShopListComponent() {
    const [shopList, setShopList] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadData = async() => {
        setLoading(true);
        await getShopList()
        .then(
            (resp) => {
                setShopList(resp.data.data);
                return setLoading(false);
            }
        )
        .catch((err) => {
            console.log(err);
            return setLoading(false);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    type shopListProps = {
        item: {
            cover_photo: string,
            name: string
        }
    }
    
    type itemProp = {
        cover_photo: string,
        name: string
        id: string
    }

    const customShopList = ({item}: shopListProps) => {
        return(
            <View style={styles.listContainer}>
                <Image style={styles.imageStyle} source={{uri: item.cover_photo}} />
                <View style={styles.listTextStyle}>
                    <View style={styles.nameBox}>
                        <Text style={styles.shopName}>{item.name}</Text>
                    </View>
                </View>
            </View>
        )
    }
  return (
    <View style={{flex: 1}}>
        <FlatList
        contentContainerStyle={{paddingBottom: 10}}
        data={shopList}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => <View style={{height: 6}} />}
        renderItem={({item}) => customShopList({item})}
        keyExtractor={(item:itemProp) => item.id}
        // onEndReachedThreshold={1}
        />
    </View>
  )
}

export default ShopListComponent

const styles = StyleSheet.create({
    container:{

    },
    listContainer: {
        maxWidth: '49%',
        flex: 2,
        borderWidth: 1,
        borderColor: '#8C0052',
        borderRadius: 5,
        shadowColor: '#000',
        elevation: 5
    },
    imageStyle: {
        height: 170
    },
    listTextStyle: {
        minWidth: '100%',
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nameBox: {
        width: 110,
        minHeight: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        filter: 'blur(5)',
        borderWidth: 1,
        borderColor: '#8C0052',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1
    },
    shopName: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000',
        fontWeight: '500',
    }
})