import { StyleSheet, FlatList, View, } from "react-native";
import React from "react";

const List = ({data, renderItem}) => {

  return(
    <View style={styles.listContainer}>
        <FlatList data= { data }
        renderItem={renderItem} 
        keyExtractor={(item) => item.id.toString()}
      />
    </View>   
  )
}

export default List

const styles = StyleSheet.create ({
  listContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    marginTop: 10,         
  } 
  
})