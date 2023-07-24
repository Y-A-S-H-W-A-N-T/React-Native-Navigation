import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Navi = ({ navigation }) => {

  const number = '8179230511'

  return (
    <ImageBackground source={require('../assets/images/trees.jpg')} style={change.back}> 
        <TouchableOpacity style={change.box} onPress={()=>navigation.navigate('about')}>
          <Text style={change.text}>ABOUT</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={change.box} onPress={()=>navigation.navigate('homepage')}>
          <Text style={change.text}>HOME</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={change.box} onPress={()=>navigation.navigate('contact',{num:number})}>
          <Text style={change.text}>CONTACT</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={change.box} onPress={()=>navigation.navigate('work')}>
          <Text style={change.text}>WORK</Text> 
        </TouchableOpacity>
    </ImageBackground>
  )
}

export default Navi

const change = StyleSheet.create({
    button: {
        margin: 30,
        backgroundColor: 'red'
    },
    box: {
      padding: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: 'orchid',
      margin: 20,
      opacity: 0.8
    },
    text: {
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'white',
      fontSize: 10,
    },
    back: {
      flex: 1
    }
})