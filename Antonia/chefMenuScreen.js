import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';

const ChefMenuScreen = ({ navigation, route }) => {
  const [menuItems, setMenuItems] = useState(route.params.menuItems || []); // Menu items passed from route
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const addMenuItem = () => {
    if (!name || !price || !course) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    const newItem = {
      id: menuItems.length + 1,
      name,
      price: parseFloat(price),
      course,
    };

    setMenuItems([...menuItems, newItem]);
    setName('');
    setPrice('');
    setCourse('');
  };

  const removeMenuItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (e.g., Starters, Mains, Desserts)"
        value={course}
        onChangeText={setCourse}
      />
      <Button title="Add Menu Item" onPress={addMenuItem} />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - R{item.price.toFixed(2)} ({item.course})</Text>
            <Button
              title="Remove"
              color="red"
              onPress={() => removeMenuItem(item.id)}
            />
          </View>
        )}
      />
      <Button
        title="Save and Go Back"
        onPress={() => navigation.navigate('HomePage', { menuItems })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ChefMenuScreen;
