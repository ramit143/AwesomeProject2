import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

function Mode_Theme() {
    const [selectedMode, setSelectedMode] = useState('');

    const handleModeClick = (mode) => {
        setSelectedMode(mode);
    };

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:10,fontSize:17,fontWeight:'700',color:'blue'}}>మోడ్/థీమ్</Text>
            </View>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.TouchableOpacityItems} onPress={() => handleModeClick('Light')}>
                    <Icons
                        name={selectedMode === 'Light' ? 'chevron-circle-down' : 'circle-thin'}
                        size={30}
                        color='red'
                    />
                    <Text style={styles.textItem}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.TouchableOpacityItems} onPress={() => handleModeClick('Dark')}>
                    <Icons
                        name={selectedMode === 'Dark' ? 'chevron-circle-down' : 'circle-thin'}
                        size={30}
                        color='red'
                    />
                    <Text style={styles.textItem}>Dark</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.TouchableOpacityItems} onPress={() => handleModeClick('System Default')}>
                    <Icons
                        name={selectedMode === 'System Default' ? 'chevron-circle-down' : 'circle-thin'}
                        size={30}
                        color='red'
                    />
                    <Text style={styles.textItem}>System Default</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Mode_Theme;

const styles = StyleSheet.create({
    headerContainer: {
        top: 0,
        width: '95%',
        height: 40,
        marginVertical: 5,
        // paddingVertical: 10,
        backgroundColor: '#ced5d6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        // position  : 'relative',
        marginHorizontal: 37,
        marginTop:-16
        // justifyContent: 'space-evenly'
    },
    subContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'relative',
        marginHorizontal: 50,
        marginBottom: 30,
        width: 300,
        height: 300
    },
    TouchableOpacityItems: {
        flexDirection: 'row',
        borderWidth: 1,
        borderWidthColor: 'black',
        width: 355,
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15

    },
    textItem: {
        marginHorizontal: 15,
        fontSize: 16,
        fontWeight: '900',
        color: 'black'
    }
});
