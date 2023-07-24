import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { React,useState } from 'react'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import Form from './form'

const Contact = ({ route }) => {

  const number = route.params.num
  
  const [modalstatus,setModalstatus] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.container}>{number}</Text>
      <TouchableOpacity style={styles.container} onPress={()=>setModalstatus(true)}>
       <EvilIcons name='plus' size={80}/>
      </TouchableOpacity>
      <Form modalstatus={modalstatus} setModalstatus={setModalstatus}/>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
      fontSize: 30,
      color: 'green',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    modal: {
      fontSize: 30,
      color: 'green',
      marginTop: 40
    },
  });