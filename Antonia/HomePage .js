import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const [specialDish, setSpecialDish] = useState('');

  // Define chef specials array
  const chefSpecials = [
    { name: 'Pasta', image: require('Antonia/pasta.jpg') },
    { name: 'Margherita pizza', image: require('Antonia/pizza.jpg') },
    { name: 'Chocolate Lava cake', image: require('Antonia/Lava-Cake.jpg') }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.imageSize} source={require('Antonia/loggo.jpg')} />
        <Text style={styles.welcome}>Welcome to VillaVita Restaurant App!</Text>
      </View>

      {/* Search Bar */}
      <TextInput style={styles.search} placeholder="Search for dishes..." />

      {/* Featured Items / Promotions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <ScrollView horizontal>
          <Image style={styles.imageSize} source={require('Antonia/steakRoyale.jpg')} />
          <Image style={styles.imageSize} source={require('Antonia/menu_dish.jpg')} />
        </ScrollView>
      </View>

      {/* Popular Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Dishes</Text>
        <ScrollView horizontal>
          <View style={styles.item}>
            <Image style={styles.imageSize} source={require('Antonia/steakRoyale.jpg')} />
            <Text style={styles.itemName}>Steak Royale</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.imageSize} source={require('Antonia/waffels.webp')} />
            <Text style={styles.itemName}>Sweet Surrender</Text>
          </View>
        </ScrollView>
      </View>

      {/* Chef's Special Dishes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chef's Specials for Tonight</Text>
        <ScrollView horizontal>
          {chefSpecials.map((dish, index) => (
            <View key={index} style={styles.item}>
              <Image style={styles.imageSize} source={dish.image} />
              <Text style={styles.itemName}>{dish.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Chef's Special Dish Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add Your Special Dish</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter special dish"
          value={specialDish}
          onChangeText={setSpecialDish}
        />
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <Button title="View Menu" onPress={() => navigation.navigate('Menu', { specialDish })} />
        <Button title="Back to Signup" onPress={() => navigation.navigate('Signup')} />
        <Button title="Chef Menu" onPress={() => navigation.navigate('ChefMenu')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageSize: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  item: {
    alignItems: 'center',
  },
  itemName: {
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  navigationButtons: {
    marginTop: 20,
  },
});

export default HomePage;
