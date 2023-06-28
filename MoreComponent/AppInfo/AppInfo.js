
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import DeviceInfo from 'react-native-device-info';
// import Clipboard from '@react-native-community/clipboard';
// import { ScrollView } from 'react-native-gesture-handler';
// import HeaderOfAppInfo from './HeaderOfAppInfo';



// function AppInfo() {
//   const [deviceName, setDeviceName] = useState('');
//   const [deviceUniqueId, setUniqueId] = useState('');
//   const [deviceBrand, setBrand] = useState('');
//   const [ApplicationName, setAppName] = useState('');
//   const [getSystemName, setSystemName] = useState('');
//   const [getVersion, setVersion] = useState('');

//   useEffect(() => {
//     getDeviceInfo();
//   }, []);

//   const getDeviceInfo = async () => {
//     let device = await DeviceInfo.getDeviceName();
//     let UniqueId = await DeviceInfo.getUniqueId();
//     let brand = await DeviceInfo.getBrand();
//     let appName = await DeviceInfo.getApplicationName();
//     let systemName = await DeviceInfo.getSystemName();
//     let version = await DeviceInfo.getVersion();

//     setDeviceName(device);
//     setUniqueId(UniqueId);
//     setBrand(brand);
//     setAppName(appName);
//     setSystemName(systemName);
//     setVersion(version);
//   };

//   const handleCopy = (text) => {
//     Clipboard.setString(text);
//   };

//   return (
//     <View>
//       <View style={styles.headerContainer}>
//         <HeaderOfAppInfo />
//       </View>
//       <ScrollView>
//         <View style={styles.container}>
//           <View>
//             <Text style={{ fontSize: 15, fontWeight: '800' }}>Unique Id :</Text>
//             <TouchableOpacity style={styles.InputBorder} onPress={() => handleCopy(deviceUniqueId)}>
//               <Text style={{ fontSize: 15, fontWeight: '800' }}>{deviceUniqueId}</Text>
//               <Icon name="copy-outline" size={20} color="red" />
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={{ fontSize: 15, fontWeight: '800' }}>Name :</Text>
//             <TouchableOpacity style={styles.InputBorder} onPress={() => handleCopy(deviceName)}>
//               <Text style={{ fontSize: 15, fontWeight: '800' }}>{deviceName}</Text>
//               <Icon name="copy-outline" size={20} color="red" />
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={{ fontSize: 15, fontWeight: '800' }}>Brand :</Text>
//             <TouchableOpacity style={styles.InputBorder} onPress={() => handleCopy(deviceBrand)}>
//               <Text style={{ fontSize: 15, fontWeight: '800' }}>{deviceBrand}</Text>
//               <Icon name="copy-outline" size={20} color="red" />
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={{ fontSize: 15, fontWeight: '800' }}>App Name :</Text>
//             <TouchableOpacity style={styles.InputBorder} onPress={() => handleCopy(ApplicationName)}>
//               <Text style={{ fontSize: 15, fontWeight: '800' }}>{ApplicationName}</Text>
//               <Icon name="copy-outline" size={20} color="red" />
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={{ fontSize: 15, fontWeight: '800' }}>System Name :</Text>
//             <TouchableOpacity style={styles.InputBorder} onPress={() => handleCopy(getSystemName)}>
//               <Text style={{ fontSize: 15, fontWeight: '800' }}>{getSystemName}</Text>
//               <Icon name="copy-outline" size={20} color="red" />
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={{ fontSize: 15, fontWeight: '800' }}>Readable Version :</Text>
//             <TouchableOpacity style={styles.InputBorder} onPress={() => handleCopy(getVersion)}>
//               <Text style={{ fontSize: 15, fontWeight: '800' }}>{getVersion}</Text>
//               <Icon name="copy-outline" size={20} color="red" />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.companyNameContainer}>
//           <Text style={{ fontSize: 15, fontWeight: '700', margin: 5 }}>Powered By</Text>
//           <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', margin: 5 }}>Margadarsi Computers</Text>
//           <Text style={{ fontSize: 15, fontWeight: '700', color: 'red', margin: 5 }}>Version : {getVersion}</Text>
//         </View>
//       </ScrollView>

//     </View>
//   );
// }

// export default AppInfo;

// const styles = StyleSheet.create({
//   container: {
//     margin: 40,
//     marginLeft: 15
//   },
//   InputBorder: {
//     borderWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderRadius: 5,
//     width: 300,
//     height: 40,
//     paddingTop: 5,
//     margin: 8,

//   },
//   companyNameContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: 'gray',
//     marginTop: 70
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 57,
//     left: 0,
//     right: 0
//   }
// });



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DeviceInfo from 'react-native-device-info';
import Clipboard from '@react-native-community/clipboard';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderOfAppInfo from './HeaderOfAppInfo';
import Toast from 'react-native-toast-message';

function AppInfo() {
  const [deviceName, setDeviceName] = useState('');
  const [deviceUniqueId, setUniqueId] = useState('');
  const [deviceBrand, setBrand] = useState('');
  const [applicationName, setAppName] = useState('');
  const [systemName, setSystemName] = useState('');
  const [version, setVersion] = useState('');
  const [scrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    getDeviceInfo();
  }, []);

  const getDeviceInfo = async () => {
    let device = await DeviceInfo.getDeviceName();
    let UniqueId = await DeviceInfo.getUniqueId();
    let brand = await DeviceInfo.getBrand();
    let appName = await DeviceInfo.getApplicationName();
    let systemName = await DeviceInfo.getSystemName();
    let version = await DeviceInfo.getVersion();

    setDeviceName(device);
    setUniqueId(UniqueId);
    setBrand(brand);
    setAppName(appName);
    setSystemName(systemName);
    setVersion(version);
  };

  const handleCopy = (text) => {
    Clipboard.setString(text);
    showToast();
  };

  const inputBorderOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Text Copied',
      position: 'bottom',
      visibilityTime: 2000,
      autoHide: true ,
      topOffset: 30,
    });
  };
  return (
    <View>
      <Animated.View style={[styles.headerContainer, { opacity: inputBorderOpacity }]}>
        <HeaderOfAppInfo />
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.label}>Unique Id :</Text>
            <TouchableOpacity onPress={() => handleCopy(deviceUniqueId)}>
              <Animated.View style={styles.inputBorder}>
                <Text style={styles.inputText}>{deviceUniqueId}</Text>
                <Icon name="copy-outline" size={20} color="red" style={{paddingRight:10}} />
              </Animated.View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Name :</Text>
            <TouchableOpacity style={styles.inputBorder} onPress={() => handleCopy(deviceName)}>
              <Text style={styles.inputText}>{deviceName}</Text>
              <Icon name="copy-outline" size={20} color="red" style={{paddingRight:10}}  />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Brand :</Text>
            <TouchableOpacity style={styles.inputBorder} onPress={() => handleCopy(deviceBrand)}>
              <Text style={styles.inputText}>{deviceBrand}</Text>
              <Icon name="copy-outline" size={20} color="red" style={{paddingRight:10}}  />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>App Name :</Text>
            <TouchableOpacity style={styles.inputBorder} onPress={() => handleCopy(applicationName)}>
              <Text style={styles.inputText}>{applicationName}</Text>
              <Icon name="copy-outline" size={20} color="red" style={{paddingRight:10}}  />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>System Name :</Text>
            <TouchableOpacity style={styles.inputBorder} onPress={() => handleCopy(systemName)}>
              <Text style={styles.inputText}>{systemName}</Text>
              <Icon name="copy-outline" size={20} color="red" style={{paddingRight:10}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Readable Version :</Text>
            <TouchableOpacity style={styles.inputBorder} onPress={() => handleCopy(version)}>
              <Text style={styles.inputText}>{version}</Text>
              <Icon name="copy-outline" size={20} color="red" style={{paddingRight:10}}  />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.companyNameContainer}>
          {/* Company name and version information */}
          <Text style={{ fontSize: 15, fontWeight: '700', margin: 5 }}>Powered By</Text>
          <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', margin: 5 }}>Margadarsi Computers</Text>
          <Text style={{ fontSize: 15, fontWeight: '700', color: 'red', margin: 5}}>Version: {version}</Text>
        </View>
      </ScrollView>
      <Toast message={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

export default AppInfo;

const styles = StyleSheet.create({
  container: {
    margin: 40,
    marginLeft: 15,
  },
  inputBorder: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    width: 300,
    height: 40,
    paddingTop: 5,
    margin: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
  },
  inputText: {
    fontSize: 15,
    fontWeight: '800',
    paddingLeft:5
  },
  companyNameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    marginTop: 70,
    marginHorizontal: 15,
  },

  headerContainer: {
    position: 'absolute',
    top: 57,
    left: 0,
    right: 0,
  },
});
