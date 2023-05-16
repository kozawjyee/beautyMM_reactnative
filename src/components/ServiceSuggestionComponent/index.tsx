import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { getShopServices } from '../../services/shopServices';

function ServiceSuggestionComponent() {

    const [loading, setLoading] = useState(false);
    const [shopServices, setShopServices] = useState([]);

    const data = ['hair', 'Finger', 'Saloon', 'Nails', 'Foot', 'Facial'];

    const loadData = async() => {
        setLoading(true);
        await getShopServices()
        .then((resp) => {
            setShopServices(resp.data.data);
            return setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            return setLoading(false);
        })
    }

    useEffect(() => {
        loadData();
    },[]);

    type renderListProps = {
        item: {
            name: string
        }
    }

    const renderList = ({item}: renderListProps) => {
        return (
            <TouchableOpacity style={styles.listStyle}>
                <Text style={styles.listText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
        <FlatList 
        style={styles.list}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={shopServices}
        ItemSeparatorComponent={() => <View style={{height: 6}} />}
        renderItem={({item}) => renderList({item})}
        numColumns={2}
        />
    </View>
  )
}

export default ServiceSuggestionComponent

const styles = StyleSheet.create({
    container: {

    },
    list: {
    },
    listText: {
        fontSize: 18,
        textTransform: 'capitalize',
    },
    listStyle: {
        flex: 1,
        backgroundColor: '#fff',
        maxWidth: "49%",
        height: 45,
        shadowColor: '#000',
        shadowOffset:{
            width: 2,
            height: 2
        },
        elevation: 2,
        paddingHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'center',
    }
})