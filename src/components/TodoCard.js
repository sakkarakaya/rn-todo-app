import React from 'react';
import { View, Text } from 'react-native';

import {todoCard} from '../style'

const TodoCard = ({data}) => {
    return (
        <View style={todoCard.container}>
            <Text style={todoCard.cardText}>{data.text}</Text>
        </View>
    )
}

export default TodoCard
