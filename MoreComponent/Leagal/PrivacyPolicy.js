import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


function PrivacyPolicy({ onClose }) {

  const handleGoBack = () => {
    onClose();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerContainer} onPress={handleGoBack}>
        <Text style={{ marginLeft: -125, fontSize: 20, color: 'black', fontWeight: 'bold' }}>బ్యాక్</Text>
        <Text style={{ marginLeft: -205, fontSize: 20, color: 'white', fontWeight: 'bold' }}>ప్రైవసీ పాలసీ</Text>
      </TouchableOpacity>

      <WebView
        source={{
          uri: 'https://api.eenadu.net/newmobileapis/privacy_policy.php?devicetype=android',
          headers: { 'key': 'value' }
        }}
      />
    </View>
  );
}

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#e69253',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
