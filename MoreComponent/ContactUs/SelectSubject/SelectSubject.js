import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function SelectSubject({ onSelect }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    onSelect(itemValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={handleValueChange}
        >
          <Picker.Item label="1. Issues" value="option1" />
          <Picker.Item label="2. Suggestions" value="option2" />
          <Picker.Item label="3. Comments" value="option3" />
        </Picker>
      </View>
    </View>
  );
}

export default SelectSubject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  pickerContainer: {
    borderWidth: 1,
    width: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
});
