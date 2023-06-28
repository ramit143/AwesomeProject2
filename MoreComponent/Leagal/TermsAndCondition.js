import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

function TermsAndCondition({onClose}) {


const handleGoBack = () => {
    onClose();
}


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerContainer} onPress={handleGoBack}>
                <Text style={{ marginLeft: -125, fontSize: 20, color: 'black', fontWeight: 'bold' }}>బ్యాక్</Text>
                <Text style={{ marginLeft: -205, fontSize: 20, color: 'white', fontWeight: 'bold' }}>టర్మ్స్‌ & కండిషన్స్‌</Text>
            </TouchableOpacity>

            <WebView
                source={{
                    uri: 'https://api.eenadu.net/newmobileapis/terms_conditions.php?devicetype=android',
                    headers: { 'key': 'value' }
                }}

            />
        </View>
    )
}

export default TermsAndCondition;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#e69253',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
