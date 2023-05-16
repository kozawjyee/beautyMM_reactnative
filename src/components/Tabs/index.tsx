import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PromotionScreen from '../../screens/PromotionScreen'
import SearchScreen from '../../screens/SearchScreen'
import ShopScreen from '../../screens/ShopScreen'
import { View, Image, Text, ImageSourcePropType, StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator();

type customProps = {
    focused: Boolean,
    image: ImageSourcePropType,
    label: String
}

const CustomTabs: React.FC<customProps> = ({focused, image, label}) => {
    return(
        <View style={{
            ...styles.tabContainer,
            backgroundColor: focused ? '#8C0052': '#fff'
        }}>
            <Image
            source={image}
            resizeMode='contain'
            style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#fff' : '#AB218E',
                marginEnd: 5
            }}
            />
            {focused && (
                <Text style={{
                    color: '#fff',
                    ...styles.tabTextStyle
                }}>
                    {label}
                </Text>
            )}
        </View>
    )
}

function BottomTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        height: 70,
        paddingHorizontal: 10
    }
    }}
    >
        <Tab.Screen 
        options={{
            tabBarIcon: ({focused}) => <CustomTabs image={require('../../../assets/Images/TabImages/promotionIcon.png')} focused={focused} label="Promotion" />
        }} 
        name='Promotion' 
        component={PromotionScreen} 
        />

        <Tab.Screen 
               options={{
            tabBarIcon: ({focused}) => <CustomTabs image={require('../../../assets/Images/TabImages/searchIcon.png')} focused={focused} label="Search" />
        }} 
        name='Search' 
        component={SearchScreen} 
        />

        <Tab.Screen 
               options={{
            tabBarIcon: ({focused}) => <CustomTabs image={require('../../../assets/Images/TabImages/shopIcon.png')} focused={focused} label="Shops" />
        }} 
        name='Shops' 
        component={ShopScreen} 
        />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        width: '100%'
    },
    tabTextStyle: {
        fontSize: 15
    }
})

export default BottomTab