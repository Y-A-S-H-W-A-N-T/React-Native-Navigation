import { View, Text, StyleSheet,  Modal, TouchableOpacity, TextInput} from 'react-native'
import { Ionicons, AntDesign} from '@expo/vector-icons'
import React from 'react'

const Form = (props) => {

    const modalstatus = props.modalstatus
    const setModalstatus = props.setModalstatus

  return (
    <View>
      <View>
        <Modal visible={modalstatus}>
          <View  style={styles.box}>
            <Text style={styles.modal}>Enter your number : </Text>
            <TextInput keyboardType='number-pad' style={styles.input}/>
          </View>
          <View>
            <TouchableOpacity style={styles.container}>
                <AntDesign name="plussquareo" size={90}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.container} onPress={()=>setModalstatus(false)}>
                <Ionicons name="close-circle-outline" size={80}/>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
      fontSize: 30,
      color: 'green',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    modal: {
      fontSize: 25,
      color: 'green',
      marginTop: 40,
    },
    box: {
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: 'grey',
        width: '50%',
        height: '30%',
        marginTop: 'auto',
        color: 'white'
    }
  });