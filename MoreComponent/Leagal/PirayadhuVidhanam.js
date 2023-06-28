import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';

function PirayadhuVidhanam({onClose}) {
   
    const handleGoBack = () => {
        onClose();
    }

    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.headerContainer} onPress={handleGoBack}>
                 <Text style={{ marginLeft: -125, fontSize: 20, color: 'black', fontWeight: 'bold' }}>బ్యాక్</Text>
                 <Text style={{ marginLeft: -205, fontSize: 20, color: 'white', fontWeight: 'bold' }}>ఫిర్యాదు విధానం</Text>
            </TouchableOpacity>

            <WebView
                source={{ uri: "https://www.eenadu.net/grievance" }}

            />
        </View>
    )
}

export default PirayadhuVidhanam;



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
