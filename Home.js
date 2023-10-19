import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown status

  // Simulated ongoing work data
  const ongoingWork = [
    {
      id: 1,
      task: 'Task 1',
      progress: 30,
    },
    {
      id: 2,
      task: 'Task 2',
      progress: 60,
    },
    {
      id: 3,
      task: 'Task 3',
      progress: 15,
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ongoing Work</Text>

      {ongoingWork.map((work) => (
        <View key={work.id} style={styles.workItem}>
          <Text>{work.task}</Text>
          <Text>{work.progress}% complete</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.dropdown}
        onPress={toggleDropdown}
      >
        <Icon name="bars" size={20} style={styles.dropdownIcon} />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.menu}>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Styles and export...

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  workItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dropdown: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 10, // Adjust top position as needed
    right: 10,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 65 : 45,
    right: 20,
    zIndex: 1,
    width: 130,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1, // Add a bottom border
    borderColor: '#ccc', // Border color (you can change it to your desired color)
  },
});


