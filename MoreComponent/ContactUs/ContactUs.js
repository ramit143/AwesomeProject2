



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import Icons from 'react-native-vector-icons/Ionicons';
// import HeaderContactUs from './HeaderContactUs';

// function ContactUs() {
//   const [arrowIcon, setArrowIcon] = useState(false);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [selectedDropdown, setSelectedDropdown] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState(['Select Subject']);

//   const handleDropdownToggle = (dropdown) => {
//     if (selectedDropdown === dropdown) {
//       setSelectedDropdown(null); // Deselect the current dropdown if clicked again
//     } else {
//       setSelectedDropdown(dropdown);
//     }

//     setShowDropDown(selectedDropdown !== dropdown); // Toggle showDropDown based on the selectedDropdown value
//     setArrowIcon(selectedDropdown !== dropdown); // Show the down-arrow icon when a dropdown item is selected
//   };

//   const handleOptionSelect = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions([option]); // Replace the selectedOptions array with the new selected option
//     } else {
//       setSelectedOptions([option]); // Set the selectedOptions array with the new selected option
//     }
//     setShowDropDown(false); // Hide the dropdown list after selecting an option
//   };

//   const containerHeight = selectedDropdown ? 535 : 410; // Adjust the container height based on the selected dropdown

//   return (
//     <View style={[styles.container, { height: containerHeight }]}>
//       <HeaderContactUs />
//       <TouchableOpacity onPress={() => handleDropdownToggle("subject")}>
//         <View style={styles.dropDownContainer}>
//           <Text style={styles.dropDownTextContainer}>{selectedOptions || 'Select Subject'}</Text>
//           <Icons name={arrowIcon ? 'chevron-up' : 'chevron-down'} size={20} color="black" style={{ marginLeft: 20, marginTop: 5 }} />
//         </View>
//       </TouchableOpacity>

//       {showDropDown && selectedDropdown === "subject" && (
//         <View style={styles.dropdownContainer}>
//           <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Issues")}>
//             <Text style={styles.dropdownItemText}>1. Issues</Text>
//           </TouchableOpacity>

//           {/* Example dropdown item */}
//           <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Suggestions")}>
//             <Text style={styles.dropdownItemText}>2. Suggestions</Text>
//           </TouchableOpacity>

//           {/* Example dropdown item */}
//           <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Comments")}>
//             <Text style={styles.dropdownItemText}>3. Comments</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       <View style={styles.subContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder='Write Your Message Here'
//         />
//       </View>
//       <TouchableOpacity style={styles.submitContainer}>
//         <Text style={styles.submitButton}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default ContactUs;

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 100,
//   },
//   subContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//   },
//   textInput: {
//     height: 100,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: 320,
//     borderRadius: 10
//   },
//   submitButton: {
//     textAlign: 'center',
//     padding: 10,
//     borderRadius: 20,
//     backgroundColor: '#e3e1e1',
//     color: 'black',
//     fontWeight: '800',
//     fontSize: 16
//   },
//   submitContainer: {
//     margin: 10,
//   },
//   dropDownContainer: {
//     flexDirection: 'row',
//     marginTop: 30
//   },
//   dropDownTextContainer: {
//     borderWidth: 1,
//     width: 275,
//     height: 35,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     textAlign: 'center',
//     paddingTop: 5,
//     fontSize:17,
//     fontWeight:'700',
//     color:'black'
//   },
//   dropdownContainer: {
//     marginTop: 5,
//     width: 200,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     elevation: 3,
//   },
//   dropdownItem2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   dropdownItemText: {
//     marginLeft: 10,
//   },
// });



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import Icons from 'react-native-vector-icons/Ionicons';
// import HeaderContactUs from './HeaderContactUs';

// function ContactUs() {
//   const [arrowIcon, setArrowIcon] = useState(false);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [selectedDropdown, setSelectedDropdown] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState(['Select Subject']);

//   const handleDropdownToggle = (dropdown) => {
//     if (selectedDropdown === dropdown) {
//       setSelectedDropdown(null); // Deselect the current dropdown if clicked again
//     } else {
//       setSelectedDropdown(dropdown);
//     }

//     setShowDropDown(selectedDropdown !== dropdown); // Toggle showDropDown based on the selectedDropdown value
//     setArrowIcon(selectedDropdown !== dropdown); // Show the down-arrow icon when a dropdown item is selected
//   };

//   const handleOptionSelect = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions([option]); // Replace the selectedOptions array with the new selected option
//     } else {
//       setSelectedOptions([option]); // Set the selectedOptions array with the new selected option
//     }
//     setShowDropDown(false); // Hide the dropdown list after selecting an option
//   };

//   const containerHeight = selectedDropdown ? 535 : -300; // Adjust the container height based on the selected dropdown

//   return (
//     <View style={styles.container}>
//       <HeaderContactUs style={styles.headerContainer}/>

//       <View style={[styles.contentContainer, { height: containerHeight }]}>
//         <TouchableOpacity onPress={() => handleDropdownToggle("subject")}>
//           <View style={styles.dropDownContainer}>
//             <Text style={styles.dropDownTextContainer}>{selectedOptions || 'Select Subject'}</Text>
//             <Icons name={arrowIcon ? 'chevron-up' : 'chevron-down'} size={20} color="black" style={{ marginLeft: 20, marginTop: 5 }} />
//           </View>
//         </TouchableOpacity>

//         {showDropDown && selectedDropdown === "subject" && (
//           <View style={styles.dropdownContainer}>
//             <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Issues")}>
//               <Text style={styles.dropdownItemText}>1. Issues</Text>
//             </TouchableOpacity>

//             {/* Example dropdown item */}
//             <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Suggestions")}>
//               <Text style={styles.dropdownItemText}>2. Suggestions</Text>
//             </TouchableOpacity>

//             {/* Example dropdown item */}
//             <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Comments")}>
//               <Text style={styles.dropdownItemText}>3. Comments</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         <View style={styles.subContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder='Write Your Message Here'
//           />
//         </View>
//         <TouchableOpacity style={styles.submitContainer}>
//           <Text style={styles.submitButton}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export default ContactUs;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 100,
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   subContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//   },
//   textInput: {
//     height: 100,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: 320,
//     borderRadius: 10
//   },
//   submitButton: {
//     textAlign: 'center',
//     padding: 10,
//     borderRadius: 20,
//     backgroundColor: '#e3e1e1',
//     color: 'black',
//     fontWeight: '800',
//     fontSize: 16
//   },
//   submitContainer: {
//     margin: 10,
//   },
//   dropDownContainer: {
//     flexDirection: 'row',
//     marginTop: 30
//   },
//   dropDownTextContainer: {
//     borderWidth: 1,
//     width: 275,
//     height: 35,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     textAlign: 'center',
//     paddingTop: 5,
//     fontSize: 17,
//     fontWeight: '700',
//     color: 'black'
//   },
//   dropdownContainer: {
//     marginTop: 5,
//     width: 200,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     elevation: 3,
//   },
//   dropdownItem2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   dropdownItemText: {
//     marginLeft: 10,
//   },
//   headerContainer : {
//     display:'flex',
//     position : 'relative',
//    bottom:-30
//   }
// });




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import Icons from 'react-native-vector-icons/Ionicons';
// import HeaderContactUs from './HeaderContactUs';

// function ContactUs() {
//   const [arrowIcon, setArrowIcon] = useState(false);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [selectedDropdown, setSelectedDropdown] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState(['Select Subject']);

//   const handleDropdownToggle = (dropdown) => {
//     if (selectedDropdown === dropdown) {
//       setSelectedDropdown(null); // Deselect the current dropdown if clicked again
//     } else {
//       setSelectedDropdown(dropdown);
//     }

//     setShowDropDown(selectedDropdown !== dropdown); // Toggle showDropDown based on the selectedDropdown value
//     setArrowIcon(selectedDropdown !== dropdown); // Show the down-arrow icon when a dropdown item is selected
//   };

//   const handleOptionSelect = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions([option]); // Replace the selectedOptions array with the new selected option
//     } else {
//       setSelectedOptions([option]); // Set the selectedOptions array with the new selected option
//     }
//     setShowDropDown(false); // Hide the dropdown list after selecting an option
//   };

//   const containerHeight = selectedDropdown ? 535 : -300; // Adjust the container height based on the selected dropdown

//   return (
//     <View style={styles.container}>
//       <HeaderContactUs />

//       <View style={[styles.contentContainer, { height: containerHeight }]}>
//         <TouchableOpacity onPress={() => handleDropdownToggle("subject")}>
//           <View style={styles.dropDownContainer}>
//             <Text style={styles.dropDownTextContainer}>{selectedOptions || 'Select Subject'}</Text>
//             <Icons name={arrowIcon ? 'chevron-up' : 'chevron-down'} size={20} color="black" style={{ marginLeft: 20, marginTop: 5 }} />
//           </View>
//         </TouchableOpacity>

//         {showDropDown && selectedDropdown === "subject" && (
//           <View style={styles.dropdownContainer}>
//             <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Issues")}>
//               <Text style={styles.dropdownItemText}>1. Issues</Text>
//             </TouchableOpacity>

//             {/* Example dropdown item */}
//             <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Suggestions")}>
//               <Text style={styles.dropdownItemText}>2. Suggestions</Text>
//             </TouchableOpacity>

//             {/* Example dropdown item */}
//             <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Comments")}>
//               <Text style={styles.dropdownItemText}>3. Comments</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         <View style={styles.subContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder='Write Your Message Here'
//           />
//         </View>
//         <TouchableOpacity style={styles.submitContainer}>
//           <Text style={styles.submitButton}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export default ContactUs;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 100,
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   subContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//   },
//   textInput: {
//     height: 100,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: 320,
//     borderRadius: 10
//   },
//   submitButton: {
//     textAlign: 'center',
//     padding: 10,
//     borderRadius: 20,
//     backgroundColor: '#e3e1e1',
//     color: 'black',
//     fontWeight: '800',
//     fontSize: 16
//   },
//   submitContainer: {
//     margin: 10,
//   },
//   dropDownContainer: {
//     flexDirection: 'row',
//     marginTop: 30
//   },
//   dropDownTextContainer: {
//     borderWidth: 1,
//     width: 275,
//     height: 35,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     textAlign: 'center',
//     paddingTop: 5,
//     fontSize: 17,
//     fontWeight: '700',
//     color: 'black'
//   },
//   dropdownContainer: {
//     marginTop: 5,
//     width: 200,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     elevation: 3,
//   },
//   dropdownItem2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   dropdownItemText: {
//     marginLeft: 10,
//   },
 
// });



import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import HeaderContactUs from './HeaderContactUs';

function ContactUs() {
  const [arrowIcon, setArrowIcon] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState(['Select Subject']);

  const handleDropdownToggle = (dropdown) => {
    if (selectedDropdown === dropdown) {
      setSelectedDropdown(null); // Deselect the current dropdown if clicked again
    } else {
      setSelectedDropdown(dropdown);
    }

    setShowDropDown(selectedDropdown !== dropdown); // Toggle showDropDown based on the selectedDropdown value
    setArrowIcon(selectedDropdown !== dropdown); // Show the down-arrow icon when a dropdown item is selected
  };

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions([option]); // Replace the selectedOptions array with the new selected option
    } else {
      setSelectedOptions([option]); // Set the selectedOptions array with the new selected option
    }
    setShowDropDown(false); // Hide the dropdown list after selecting an option
  };

  const containerHeight = selectedDropdown ? 535 : -300; // Adjust the container height based on the selected dropdown

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderContactUs />
      </View>

      <View style={[styles.contentContainer, { height: containerHeight }]}>
        <TouchableOpacity onPress={() => handleDropdownToggle("subject")}>
          <View style={styles.dropDownContainer}>
            <Text style={styles.dropDownTextContainer}>{selectedOptions || 'Select Subject'}</Text>
            <Icons name={arrowIcon ? 'chevron-up' : 'chevron-down'} size={20} color="black" style={{ marginLeft: 20, marginTop: 5 }} />
          </View>
        </TouchableOpacity>

        {showDropDown && selectedDropdown === "subject" && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Issues")}>
              <Text style={styles.dropdownItemText}>1. Issues</Text>
            </TouchableOpacity>

            {/* Example dropdown item */}
            <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Suggestions")}>
              <Text style={styles.dropdownItemText}>2. Suggestions</Text>
            </TouchableOpacity>

            {/* Example dropdown item */}
            <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Comments")}>
              <Text style={styles.dropdownItemText}>3. Comments</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Write Your Message Here'
          />
        </View>
        <TouchableOpacity style={styles.submitContainer}>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
   
  },
  headerContainer: {
    position: 'absolute',
    top: 58,
    left: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    width: 320,
    borderRadius: 10
  },
  submitButton: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#e3e1e1',
    color: 'black',
    fontWeight: '800',
    fontSize: 16
  },
  submitContainer: {
    margin: 10,
  },
  dropDownContainer: {
    flexDirection: 'row',
    marginTop: 60
  },
  dropDownTextContainer: {
    borderWidth: 1,
    width: 275,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 17,
    fontWeight: '700',
    color: 'black'
  },
  dropdownContainer: {
    marginTop: 5,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  dropdownItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dropdownItemText: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '700',
    color: 'black'
  },
});
