import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { todoInput } from '../style';

const TodoInput = (props) => {

    const [text, setText] = useState("");

    return (
        <View style={todoInput.container}>
            <View style={todoInput.inputContainer}>
                <TextInput 
                    placeholder="type here..."
                    onChangeText={value => setText(value)}
                />
            </View>
            <TouchableOpacity 
                style={todoInput.buttonContainer}
                onPress={() => props.onEnter(text)}
                >
                <Text style={todoInput.buttonText}>Enter</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TodoInput
