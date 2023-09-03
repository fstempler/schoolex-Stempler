import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from './components/Modal';
import List from './components/List';
import Insert from './components/Insert';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';


export default function App() {
   
  //List
  const [itemsList, setItemsList] = useState([]);
  const renderListItem = ({ item, index }) => (
    <View style={styles.TextContainer}>
      <View style={styles.Student}>
        <FontAwesome5 name="user-graduate" size={24} color="#003249" />
      </View>
    
    <Text style={styles.Text}>{item.value}</Text>
  
    <TouchableOpacity style={styles.removeStudent} onPress={ () => onHandleModal(item, index)}>
      <Ionicons name="person-remove-outline" size={20} color="#000" />
    </TouchableOpacity>
    </View>  
  )

  //Insert
  const [textValue, setTextValue] = useState('');
  const onHandleChangeItem = (text) => {
    setTextValue(text);  
  };
  const addStudent = () => {
    setItemsList(prevState => [
    ...prevState,
    {id: Math.random(), value: textValue},
  ]);
  setTextValue('');
}

  // Modal
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleDelete = () => {
    const updatedList = itemsList.filter((_, index) => index !== itemSelected.index);
    setItemsList(updatedList);
    setModalVisible(false);
  };

  const onHandleModal = (item, index) => {
    setModalVisible(true);
    setItemSelected({ item, index });
  };

  const cancelDelete = () => {
    setModalVisible(false);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>📚 SCHOOLEX ✏️</Text>   
        <Text style={styles.textStudent}>Agrega tus estudiantes</Text>        
      </View>
      
      <Insert value={textValue} onChangeText={onHandleChangeItem} onPress={addStudent} />

      <List data={itemsList} renderItem={renderListItem} />

      <StatusBar style="auto" />

      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} itemSelected={itemSelected} cancelDelete={cancelDelete} />
      <Text style={styles.copyright}>Copyright © 2023 Stempler®. All rights reserved.</Text>      
    </View> 
  );  
}

const styles = StyleSheet.create({
  
  //Main Container
  container: {
    flex: 1,
    backgroundColor: '#003249',    
    alignItems: 'center',
    justifyContent: 'start',      
  },
  header:{
    backgroundColor: '#003249',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#fff',
    marginTop: 50,
    marginBottom:15,
  },
  textStudent: {
    fontSize: 20,
    color: '#fff',
    marginBottom:15,
  },   
  
  copyright: {
    color: 'black',
  },

  //LIST
  listContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    marginTop: 10,         
  }, 
  
  TextContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007ea7',    
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    width: 300,
    borderRadius: 10,
  }, 
  Text:{
    color: '#CCDBDC',
    fontSize: 17,    
  }, 
  Student:{
    borderRadius:50,
    borderWidth: 2,
    borderColor: '#003249',
    padding: 5,
  },  
  removeStudent: {
    borderRadius: 50,
    backgroundColor: '#fff',    
    padding: 4,
  },

 
//----------------------------------------------------

});
