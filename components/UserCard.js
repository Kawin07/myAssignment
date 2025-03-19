import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Image
        source={{ uri: user.avatar }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{user.first_name} {user.last_name}</Text>

      <Text style={styles.label}>1. ID:</Text>
      <TextInput style={styles.input} value={user.id.toString()} editable={false} />

      <Text style={styles.label}>2. UID:</Text>
      <ScrollView horizontal style={{ marginBottom: 12 }}>
        <TextInput style={[styles.input, { width: 300 }]} value={user.uid} editable={false} />
      </ScrollView>

      <Text style={styles.label}>3. Password:</Text>
      <TextInput style={styles.input} value={user.password} editable={false} />

      <Text style={styles.label}>4. First Name:</Text>
      <TextInput style={styles.input} value={user.first_name} editable={false} />

      <Text style={styles.label}>5. Last Name:</Text>
      <TextInput style={styles.input} value={user.last_name} editable={false} />

      <Text style={styles.label}>6. Username:</Text>
      <TextInput style={styles.input} value={user.username} editable={false} />

      <Text style={styles.label}>7. Email:</Text>
      <ScrollView horizontal style={{ marginBottom: 12 }}>
        <TextInput style={[styles.input, { width: 300 }]} value={user.email} editable={false} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 12,
    color: '#333',
  },
});

export default UserCard;
