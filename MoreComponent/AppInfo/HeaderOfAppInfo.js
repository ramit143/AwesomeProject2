import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HeaderOfAppInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Icon name="close-circle" size={30} color="red" style={styles.iconPosition} />
        <Text style={styles.textPosition}>యాప్ ఇన్ఫో</Text>
      </View>
    </View>
  )
}

export default HeaderOfAppInfo;



const styles = StyleSheet.create({
    container: {
  //    flex:1,
      borderWidth: 1,
      width: '100%', // Use percentage width to fit within the parent component
      maxWidth: 370, // Add maxWidth to limit the width of the container
      height: 50,
      borderRadius: 20,
      position: 'relative',
      top: -77,
      borderTopColor: 'white',
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center', // Center the content vertically
      justifyContent: 'center', // Center the content horizontally
    },
    textPosition: {
      flex: 1,
      textAlign: 'center',
      position: 'relative',
      bottom: -10,
      fontSize: 20,
      color: 'blue',
    },
    iconPosition: {
      position: 'relative',
      bottom: -8,
      marginLeft: 10, // Add margin for proper spacing
    },
  });
  