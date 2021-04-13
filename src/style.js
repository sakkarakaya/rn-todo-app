import {Dimensions, StyleSheet} from 'react-native';

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#607d8b'
    },
    banner:{
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    todoText:{
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ff9b31'
    },
    counterText:{
        fontSize: 35,
        color: '#ff9b31'
    },
    nothing: {
        backgroundColor: '#ffb74d',
        margin: 5,
        padding: 5,
        borderRadius: 5,
        fontSize: 19
    }
})

const todoInput = StyleSheet.create({
    container:{
        backgroundColor: '#ff9b31',
        margin: 10,
        padding: 10,
        borderRadius: 5
    },
    inputContainer: {
        backgroundColor: '#cfd8dc',
        margin: 10,
        padding: 10,
        borderRadius: 5
    },
    buttonContainer:{
        backgroundColor: '#607d8b',
        width: Dimensions.get('window').width * 0.2,
        margin: 7,
        padding: 7,
        borderRadius: 8,
        alignSelf: 'center'
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

const todoCard = StyleSheet.create({
    container:{
        backgroundColor: '#ffb74d',
        margin: 5,
        padding: 5,
        borderRadius: 5
    },
    cardText:{
        fontSize: 19
    }
})

export {main, todoInput, todoCard};