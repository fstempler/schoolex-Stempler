import { StyleSheet, Text, View, Modal as NewModal, TouchableOpacity } from "react-native";
import React from "react";

const Modal = ({modalVisible, onHandleDelete, itemSelected, cancelDelete }) => {

    return (
    <NewModal visible={modalVisible} animationType='fade' transparent={true}> 
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>          
          <View style={styles.modalMessageContainer}>
            <Text style={styles.modalMessage}>¿Estás seguro de eliminar a {itemSelected && itemSelected.item ? itemSelected.item.value : 'este estudiante'}?</Text>
          </View>

          <View style={styles.modalButtonContainer}> 
          <TouchableOpacity title='Confirmar' onPress={onHandleDelete} style={styles.modalButtonConfirm}><Text>Confirmar</Text></TouchableOpacity>
          <TouchableOpacity style={styles.modalButtonCancel} onPress={cancelDelete}><Text>Cancelar</Text></TouchableOpacity>              
          </View>
        </View>
      </View>  
    </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
     
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent:{
    backgroundColor:'#007ea7',
    borderRadius: 5,
    borderColor: '#80ced7',
    borderWidth: 2,
    padding: 10,
  },  
  modalMessageContainer:{
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalMessage: {
    color: '#fff',
    fontSize: 18,
  },
  modalButtonContainer:{
    marginTop: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent:'space-around'
  },

  modalButtonConfirm: {
    backgroundColor: '#90D68D',
    padding: 10,
    borderRadius: 10,
    
  },
  modalButtonCancel: {
    backgroundColor: '#D18888',
    padding: 10,
    borderRadius: 10,
  },

})