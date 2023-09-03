import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React from "react";

const Insert = ({value, onChangeText, onPress}) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder='Nuevo Estudiante'
          placeholderTextColor={'#171717'}
          style={styles.input}
          value={value} 
          onChangeText={onChangeText}                  
          >            
        </TextInput>
        <TouchableOpacity onPress={onPress}>
        <AntDesign style={styles.addStudent} name="adduser" size={24} color="black" />
        </TouchableOpacity>
        
      </View>
    )
}

export default Insert;

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor:'#CCDBDC',
      },
      input:{    
        width: 300,
        padding: 10,
        color: '#171717',
        marginRight:5,
      },
      addStudent:{
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        marginRight: 10,
      },
})