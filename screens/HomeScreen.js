import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { fetchUsers } from '../utils/api';
import UserCard from '../components/UserCard';
import Svg, { Circle, Rect, Path } from 'react-native-svg';


const nextSvg = `
<svg fill="#000000" height="24" width="24" viewBox="0 0 24 24"><polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12"/></svg>`;

const previousSvg = `
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><polyline fill="none" stroke="#000000" stroke-width="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"/></svg>`;

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers(80);
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Unexpected response format:', data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    loadUsers();
  }, []);

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const user = users[currentIndex];

  return (
    <View style={styles.container}>
      {user ? <UserCard user={user} /> : <Text>Loading user data...</Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, currentIndex === 0 && styles.disabledButton]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <SvgXml xml={previousSvg} width="24" height="24" />
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, currentIndex === users.length - 1 && styles.disabledButton]}
          onPress={handleNext}
          disabled={currentIndex === users.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
          <SvgXml xml={nextSvg} width="24" height="24" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  disabledButton: {
    backgroundColor: '#b0c4de',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});

export default HomeScreen;