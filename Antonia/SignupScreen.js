import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  // Handle Sign In
  const handleSignIn = () => {
    if (username && password) {
      navigation.navigate('HomePage'); // Navigate to Home Screen after login
    } else {
      Alert.alert('Error', 'Please enter both username and password.'); // Alert for empty fields
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('Antonia/loggo.jpg')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Antonia's Restaurant App</Text>

      <TextInput
        style={styles.input}
        placeholder="Username" // Placeholder for username
        value={username} // Value for the username input
        onChangeText={setUsername} // Update username state
        autoCapitalize="none" // No auto-capitalization for usernames
      />

      <TextInput
        style={styles.input}
        placeholder="Password" // Placeholder for password
        value={password} // Value for the password input
        onChangeText={setPassword} // Update password state
        secureTextEntry // Secure text entry for password
        autoCapitalize="none" // No auto-capitalization for passwords
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#80000', // Beige background color
  },
  logo: {
    width: 200, // Logo width
    height: 200, // Logo height
    alignSelf: 'center', // Center logo horizontally
    marginBottom: 30, // Space below the logo
  },
  title: {
    fontSize: 28, // Title font size
    marginBottom: 20, // Space below the title
    textAlign: 'center', // Center title text
    fontWeight: 'bold', // Bold title
  },
  input: {
    height: 40, // Height of the input fields
    borderColor: '#ccc', // Border color for input fields
    borderWidth: 1, // Border width for input fields
    marginBottom: 20, // Space below the input fields
    paddingHorizontal: 10, // Horizontal padding for input fields
    borderRadius: 5, // Rounded corners for input fields
    backgroundColor: '#fff', // White background for input fields
  },
  button: {
    marginTop: 10, // Space above button
    backgroundColor: '#007BFF', // Blue background for button
    paddingVertical: 10, // Vertical padding for button
    borderRadius: 5, // Rounded corners for button
    alignItems: 'center', // Center button text
  },
  buttonText: {
    color: '#fff', // White text color for button
    fontSize: 18, // Font size for button text
    fontWeight: 'bold', // Bold button text
  },
});

export default SignupScreen;
