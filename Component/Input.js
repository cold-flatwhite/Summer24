import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'

const Input = () => {
    const [text, setText] = useState('');
  return (
    <>
        <TextInput Style = {{height : 40}} 
        placeholder='Type something'
        onChangeText={newText => setText(newText) }
        value={text}
     />  
     <Text>{text}</Text>
    </>

  )
}

export default Input