import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

function FooterOfLeagal() {
    const [version, setVersion] = useState('');


    useEffect(() => {
        getDeviceInfo();
    }, []);


    const getDeviceInfo = async () => {
        let version = await DeviceInfo.getVersion();

        setVersion(version);
    }
    return (
        <View>
            <View>
                <View style={styles.subContainer}>
                    <Text style={{color:'#b35f0b',fontSize:16,fontWeight:'bold'}}>Version : {version} </Text>
                    <Text  style={{color:'white',fontSize:16,fontWeight:'bold'}}>ఈనాడు న్యూస్ మొబైల్ అప్లికేషన్</Text>
                </View>
            </View>
        </View>
    )
}

export default FooterOfLeagal;

const styles = StyleSheet.create({
    subContainer: {
        bottom: 0, 
        width: '100%',
         height: 'auto', 
         marginVertical: 5, 
         paddingVertical: 10, 
         backgroundColor: '#2874f0', 
         borderTopLeftRadius: 30, 
         borderTopRightRadius: 30,
         justifyContent: 'center',
         textAlign:'center',
         alignItems:'center',

    }
})