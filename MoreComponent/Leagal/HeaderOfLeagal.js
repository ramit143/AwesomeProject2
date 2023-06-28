
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HeaderOfLeagal() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Icon name="close-circle" size={30} color="red" style={styles.iconPosition} />
        <Text style={styles.textPosition}>లీగల్</Text>
      </View>
    </View>
  );
}

export default HeaderOfLeagal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    width: '100%',
    maxWidth: 370,
    height: 50,
    borderRadius: 20,
    position: 'relative',
    top: -77,
    borderTopColor: 'white',




  },
  subContainer: {
    // flexDirection: 'row',
    // alignItems: 'center', 
    // justifyContent: 'center', 

    bottom: 0,
    width: '100%',
    height: 75,
    marginVertical: 5,
    paddingVertical: 10,
    backgroundColor: '#e2dce3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    textAlign: 'center',
    // alignItems: 'center',



  },
  textPosition: {
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    bottom: 20,
    fontSize: 20,
    color: 'blue',
  },
  iconPosition: {
    position: 'relative',
    bottom: -8,
    marginLeft: 10, // Add margin for proper spacing
  },
});
