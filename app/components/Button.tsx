import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title,onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{backgroundColor:'orange',paddingVertical:15,paddingHorizontal:35,borderRadius:10,alignItems:'center'}}>
      <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button