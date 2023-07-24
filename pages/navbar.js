import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import React from 'react'

const Navbar = () => {

    const navigation = useNavigation()
  return (
    <ImageBackground style={change.back} source={require('../assets/images/trees.jpg')}>
        <TouchableOpacity style={change.bar} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <View>
                <EvilIcons name='navicon' color='orchid' size={40}/>
            </View>
        </TouchableOpacity>
        <View style={change.box}>
            <Text style={change.text}>SKILL HUB</Text>
         </View>
    </ImageBackground>
  )
}

export default Navbar

const change = StyleSheet.create({
    box: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    text: {
        fontSize: 40,
        color: 'orchid'
    },
    back: {
        backgroundColor: 'red',
        marginTop: 40,
        flexDirection: 'row',
    },
    bar: {
        justifyContent: 'center',
    }
})