import React from 'react'
import { View, Text } from 'react-native'

const TodoCard = (props) => {
    return (
        <View>
            <Text>{props.data.text}</Text>
        </View>
    )
}

export default TodoCard
