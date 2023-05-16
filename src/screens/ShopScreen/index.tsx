import { Picker } from '@react-native-picker/picker'
import React, {useState, useEffect} from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { getRegionList } from '../../services/regionService';
import ShopListComponent from '../../components/ShopListComponent';

function ShopScreen() {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [loading, setLoading] = useState(false);
    const [regionList, setRegionList] = useState([]);

    const loadData = async() => {
        setLoading(true);
        await getRegionList()
        .then((response) => {
            setRegionList(response.data.data);
            return setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            return setLoading(false);
        })
    }

    useEffect(() => {
        loadData();
    },[])

    type valueProps = {
        name: string,
        id: number
    }

  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>ShopDiary</Text>
                <Picker
                style={styles.picker}
                selectedValue={selectedRegion}
                onValueChange={(itemValue, itemIndex) => setSelectedRegion(itemValue)}
                >
                    { 
                        regionList.map((value: valueProps) => (
                            <Picker.Item label={value.name} key={value.id} value={value} />
                        ))
                    }
                </Picker>
            </View>
            <ShopListComponent />
        </View>
    </SafeAreaView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    header: {
        color: '#AB218E',
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    picker: {
        maxWidth: '50%',
        minWidth: 180,
        backgroundColor: '#fff'
    }
})