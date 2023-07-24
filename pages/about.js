import { StyleSheet, Text, View, Button } from 'react-native';

export default function About({ navigation }) {

  return(
    <View>
      <Text style={styles.container}>HELLO!!!</Text>
      <Button title='Testing' onPress={()=>navigation.navigate('test')}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    fontSize: 30
  },
});
