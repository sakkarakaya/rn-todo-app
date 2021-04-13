import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {todoCard} from '../style'

const TodoCard = (props) => {
    return (
        <TouchableOpacity 
        style={todoCard.container}
        onPress={() => props.onDone(props.data.id)}
        onLongPress={() => props.onRemove()}
        >
            <Text style={[todoCard.cardText, 
                {textDecorationLine: props.data.isDone ? 'line-through' : null}
                ]}
            >{props.data.text}</Text>
        </TouchableOpacity>
    )
}

export default TodoCard
