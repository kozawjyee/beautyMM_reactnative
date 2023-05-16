import React, {useState} from 'react'
import { SafeAreaView, StatusBar, View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import ServiceSuggestionComponent from '../../components/ServiceSuggestionComponent';

function SearchScreen() {
    const [inputFocused, setInputFocused] = useState(false);
    const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
            <StatusBar />
            <View style={styles.container}>
                <Text style={styles.header}>Search</Text>
                <View style={styles.searchWrapper}>
                    <View style={styles.inputWrapper}>
                        <Image source={require('../../../assets/Images/icons/searchIcon.png')} />
                        <TextInput
                        onFocus={() => setInputFocused(true)} 
                        // onBlur={() => setInputFocused(false)}
                        value={searchText} 
                        onChangeText={setSearchText}
                        style={styles.input} 
                        placeholder='Search yours...' 
                        />
                    </View>
                    {
                        searchText && (
                            <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearBtn}>
                                <Text style={styles.btnText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={styles.suggestContainer}>
                    {
                        inputFocused && (
                            <ServiceSuggestionComponent />
                        )
                    }
                </View>
            </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15
    },
    inputWrapper: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 7
    },
    header: {
        color: '#AB218E',
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10
    },
    searchWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    clearBtn: {
        marginLeft: 10,
        width: 70,
        height: 50,
        borderRadius: 7,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 15,
        fontWeight: '500'
    },
    suggestContainer: {
        flex: 1,
        marginTop: 10,
        paddingBottom: 10
    }
})