import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

export default function Home({ navigation }) {

  return(
    <ImageBackground style={change.back} source={require('../assets/images/spiderman.jpg')}>
      <TouchableOpacity style={change.box} onPress={()=>navigation.navigate('gold',{ball: 7})}>
          <Text style={change.text}>MESSI</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={change.box} onPress={()=>navigation.navigate('gold',{ball: 5})}>
          <Text style={change.text}>RONALDO</Text> 
        </TouchableOpacity>
    </ImageBackground>
  )

}

const change = StyleSheet.create({
  box: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'orchid',
    margin: 20
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: 30,
  },
  back: {
    flex: 1
  }
})
