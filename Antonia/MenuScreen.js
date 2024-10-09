import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const dishes = [
  {
    id: 1,
    name: 'Pasta Primavera',
    price: 112.99,
    description: 'A delightful mix of seasonal vegetables and pasta, tossed in olive oil.',
    image: require('Antonia/pasta.jpg'), // Update with your image path
  },
  {
    id: 2,
    name: 'Steak Royale',
    price: 125.99,
    description: 'Juicy steak cooked to perfection with a side of mashed potatoes.',
    image: require('Antonia/steakRoyale.jpg'), // Update with your image path
  },
  {
    id: 3,
    name: 'Sweet Surrender',
    price: 80.99,
    description: 'Tender chicken nuggets, perfect for dipping.',
    image: require('Antonia/waffels.webp'), // Update with your image path
  },
  {
    id: 4,
    name: 'Caesar Salad',
    price: 110.99,
    description: 'Crisp romaine lettuce tossed in Caesar dressing with croutons and Parmesan.',
    image: require('Antonia/menu_dish.jpg'), // Update with your image path
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    price: 140.99,
    description: 'Classic pizza topped with fresh mozzarella, tomatoes, and basil.',
    image: require('Antonia/pizza.jpg'), // Update with your image path
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    price: 75.99,
    description: 'Decadent chocolate cake with a molten center served with vanilla ice cream.',
    image: require('Antonia/Lava-Cake.jpg'), // Update with your image path
  },
];

const MenuScreen = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);

  const toggleDishSelection = (dish) => {
    // Toggle selection of dishes
    if (selectedDishes.includes(dish.id)) {
      setSelectedDishes(selectedDishes.filter((id) => id !== dish.id));
    } else {
      setSelectedDishes([...selectedDishes, dish.id]);
    }
  };

  const handleSubmitOrder = () => {
    // Here, you can handle the submission of the order
    // For demonstration, we'll just log the selected dishes
    const selectedItems = dishes.filter(dish => selectedDishes.includes(dish.id));
    const totalPrice = selectedItems.reduce((total, dish) => total + dish.price, 0);
    
    // Display order summary in Rands (ZAR)
    alert(`Your Order:\n${selectedItems.map(dish => `${dish.name} - R${dish.price.toFixed(2)}`).join('\n')}\nTotal: R${totalPrice.toFixed(2)}`);
  };

  return (
    <ScrollView style={styles.container}>
      {dishes.map((dish) => (
        <View key={dish.id} style={styles.dishContainer}>
          <Image source={dish.image} style={styles.image} resizeMode="contain" />
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishPrice}>R{dish.price.toFixed(2)}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
          <Button
            title={selectedDishes.includes(dish.id) ? 'Remove from Order' : 'Add to Order'}
            onPress={() => toggleDishSelection(dish)}
          />
        </View>
      ))}

      <View style={styles.orderButtonContainer}>
        <Button title="Submit Order" onPress={handleSubmitOrder} disabled={selectedDishes.length === 0} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  dishContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dishPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  dishDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  orderButtonContainer: {
    marginVertical: 20,
  },
});

export default MenuScreen;
