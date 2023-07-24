import { StyleSheet } from 'react-native'


const Model = StyleSheet.create({
    text: {
        color: 'white',
        marginBottom: 20,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'green',
        marginTop: 20,
        fontSize: 50,
        borderRadius: 20,
        padding: 20,
        paddingLeft: 60,
        paddingRight: 60
    },
    box: {
        backgroundColor: 'orchid',
        padding: 20,
        margin: 10,
        borderRadius: 30
    }
})


const images = {
    ball: {
        '5': require('../assets/images/goldenball-5.jpg'),
        '7': require('../assets/images/goldenball-7.jpg')
    }
}

export { Model, images }