import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SCHOOLEX</Text>     
      <Text style={styles.emoji}>📐📚✏️</Text>
      
      
      <View style={styles.logInContainer}>
        <TextInput
      style={styles.input}
      placeholder='User'
      ></TextInput>
      <TextInput
      style={styles.input}
      placeholder='Password'
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>      
      </View>

      <StatusBar style="auto" />
      <Text style={styles.copyright}>Copyright © 2023 Stempler®. All rights reserved.</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',    
    alignItems: 'center',
    justifyContent: 'start',  
    padding: 25,  
  },
  text: {
    fontSize: 50,
    color: '#FB6076',
    margin: 50,
  },
  emoji: {
    fontSize: 75,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  logInContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '75%',
    marginBottom: 55,
  },
  button: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,    
    alignItems: 'center',
  },
  copyright: {
    color: 'black',
  }
});
