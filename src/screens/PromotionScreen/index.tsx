import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'
import PromotionListComponent from '../../components/PromotionListComponent'
import { getPromotionServices } from '../../services/promotionServices';

function PromotionScreen() {
    const [loading, setLoading] = useState(false);
    const [promotionList, setPromotionList] = useState([]);

    const loadData = async() => {
        setLoading(true);
        await getPromotionServices()
        .then((resp) => {
            setPromotionList(resp.data.data);
            return setLoading(false);
        })
        .catch((error) => {
            console.log(error)
            return setLoading(false);
        })
    }

    useEffect(() => {
        loadData()
    },[]);

  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar />
            <View style={styles.container}>
                <Text style={styles.header}>For you</Text>
                <Text style={styles.subHeader}>Today's Promotions!!!</Text>
                {
                    !loading && (
                        <PromotionListComponent promoList={promotionList}/>
                    )
                }
            </View>
    </SafeAreaView>
  )
}

export default PromotionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    header: {
        color: '#AB218E',
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10
    },
    subHeader: {
        color: '#AB218E',
        fontSize: 25,
        fontWeight: '500'
    }
})