import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Linking, Modal, TouchableWithoutFeedback } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import HeaderOfLeagal from './HeaderOfLeagal';
import FooterOfLeagal from './FooterOfLeagal';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndCondition from './TermsAndCondition';
import * as OpenAnything from 'react-native-openanything';
import PirayadhuVidhanam from './PirayadhuVidhanam';



function Legal() {

    const [showPrivacyPolicyComponent, setPrivacyPolicyComponent] = useState(false);
    const [showTermsAndConditionComponent, setTermsAndConditionomponent] = useState(false);
    const [showPirayadhuVidhanamComponent , setPirayadhuVidhanamComponent ] = useState(false);




    const handleEenaduGurinchiClick = () => {
        const url = 'https://info.eenadu.net/';

        Linking.openURL(url)
            .catch(() => {
                console.error('Failed to open Play Store for rating')
            });
    }


    const handleCSRPolicyClick = () => {
        const url = 'https://info.eenadu.net/csr_policy.htm';

        Linking.openURL(url)
            .catch(() => {
                console.error('Failed to open Play Store for rating')
            });
    }


    const handlePrivacyPolicyComponentClick = () => {
        setPrivacyPolicyComponent(true);
    }

    const handleTermsAndConditionComponentClick = () => {
        setTermsAndConditionomponent(true);
    }

    const handlePirayadhuVidhanamClick = () => {
        setPirayadhuVidhanamComponent(true)
    }


    const handleCloseMenu = () => {
        setPrivacyPolicyComponent(false);
        setTermsAndConditionomponent(false);
        setPirayadhuVidhanamComponent(false);
    };



    return (
        <View style={styles.superContainer}>
            <View style={styles.headerContainer}>
                <HeaderOfLeagal />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.TouchableOpacityItems} onPress={handleEenaduGurinchiClick}>
                        <View style={styles.ImageContainer}>
                            <Image source={require('./Images/Eenadu_logo_lt.jpg')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: -4 }} />
                            <Text style={styles.text}>ఈనాడు గురించి</Text>
                        </View>
                        <Icons name="chevron-circle-right" size={30} style={styles.icons} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacityItems} onPress={handlePrivacyPolicyComponentClick}>
                        <View style={styles.ImageContainer}>
                            <Image source={require('./Images/privacy.png')} style={{ width: 25, height: 35, margin: 10 }} />
                            <Text style={styles.text}>ప్రైవసీ పాలసీ</Text>
                        </View>
                        <Icons name="chevron-circle-right" size={30} style={styles.icons} />
                    </TouchableOpacity>

                    {
                        showPrivacyPolicyComponent && (
                            <Modal>
                                <TouchableWithoutFeedback>
                                    <PrivacyPolicy onClose={handleCloseMenu} />
                                </TouchableWithoutFeedback>
                            </Modal>
                        )
                    }


                    <TouchableOpacity style={styles.TouchableOpacityItems} onPress={handleTermsAndConditionComponentClick}>
                        <View style={styles.ImageContainer}>
                            <Icons name="file-text-o" size={30} color='#5a96c4' style={{ margin: 10 }} />
                            <Text style={styles.text}>టర్మ్స్‌ & కండిషన్స్‌</Text>
                        </View>
                        <Icons name="chevron-circle-right" size={30} style={styles.icons} />
                    </TouchableOpacity>

                    {
                        showTermsAndConditionComponent && (
                            <Modal>
                                <TouchableWithoutFeedback>
                                    <TermsAndCondition onClose={handleCloseMenu} />
                                </TouchableWithoutFeedback>
                            </Modal>
                        )
                    }


                    <TouchableOpacity style={styles.TouchableOpacityItems} onPress={handlePirayadhuVidhanamClick}>
                        <View style={styles.ImageContainer}>
                            <Image source={require('./Images/right_tick.png')} style={{ width: 30, height: 30, margin: 10 }} />
                            <Text style={styles.text}>ఫిర్యాదు విధానం</Text>
                        </View>
                        <Icons name="chevron-circle-right" size={30} style={styles.icons} />
                    </TouchableOpacity>
                    {
                        showPirayadhuVidhanamComponent && (
                            <Modal>
                                <TouchableWithoutFeedback>
                                    <PirayadhuVidhanam onClose={handleCloseMenu} />
                                </TouchableWithoutFeedback>
                            </Modal>
                        )
                    }
                    <TouchableOpacity style={styles.TouchableOpacityItems} onPress={handleEenaduGurinchiClick}>
                        <View style={styles.ImageContainer}>
                            <Image source={require('./Images/mobile.png')} style={{ width: 40, height: 40, margin: 10, marginHorizontal: 5 }} />
                            <Text style={styles.text}>యాప్ గురించి</Text>
                        </View>
                        <Icons name="chevron-circle-right" size={30} style={styles.icons} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacityItems} onPress={() => OpenAnything.Pdf("https://assets.eenadu.net/_assets/_pdf/CODE_OF_ETHICS_FOR_DIGITAL_NEWS_WEBSITES.pdf")}>
                        <View style={styles.ImageContainer}>
                            <Image source={require('./Images/Eenadu_logo_lt.jpg')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 5 }} />
                            <Text style={styles.text}>DNPA కోడ్‌ ఆఫ్‌ ఎథిక్స్‌</Text>
                        </View>
                        <Icons name="chevron-circle-right" size={30} style={styles.icons} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableOpacityItems} onPress={handleCSRPolicyClick}>
                        <View style={styles.ImageContainer}>
                            <Image source={require('./Images/Eenadu_logo_lt.jpg')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 5 }} />
                            <Text style={styles.text}>CSR పాలసీ</Text>
                        </View>
                        <Icons name="chevron-circle-right" size={30} style={styles.icons} />
                    </TouchableOpacity>
                </View>
                <FooterOfLeagal />
            </ScrollView>
        </View>
    );
}

export default Legal;

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,
        backgroundColor: '#f0eee1',

    },
    scrollContent: {
        flexGrow: 1,
        // paddingBottom: 20, // Adjust the padding bottom as needed
        // paddingTop: 60
    },
    scrollView: {
        marginTop: 80, // Adjust the marginTop as needed based on the height of HeaderOfLeagal component
    },
    subContainer: {
        width: 320,
        // marginTop: -50,
    },
    TouchableOpacityItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.3

    },
    headerContainer: {
        position: 'absolute',
        top: 58,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    ImageContainer: {
        flexDirection: 'row',
    },
    text: {
        paddingTop: 25,
        marginHorizontal: 15,
        color: 'black',
        fontSize: 15,
        fontWeight: '700'
    },
    icons: {
        paddingTop: 20,
        color: '#5a96c4'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    menuContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center', // Align menu content to the right
        position: 'absolute',
        bottom: -20,
        width: 385,
        height: 500
    },

})
