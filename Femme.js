import React from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';

const Femme = () => {
  const products = [
    {
      id: 1,
      name: 'T-shirt',
      price: '$49.99',
      image: require('./assets/Produits1.jpeg'),
    },
    {
      id: 2,
      name: 'T-shirt',
      price: '$39.99',
      image: require('./assets/Produits2.jpeg'),
    },
    {
      id: 3,
      name: 'T-shirt',
      price: '$79.99',
      image: require('./assets/Produits3.jpeg'),
    },
   
    {
        id: 4,
        name: 'T-shirt',
        price: '$79.99',
        image: require('./assets/Produits4.jpeg'),
      },
      {
        id: 5,
        name: 'T-shirt',
        price: '$79.99',
        image: require('./assets/Produits5.jpeg'),
      },

      {
        id: 6,
        name: 'T-shirt',
        price: '$79.99',
        image: require('./assets/Produits9.jpeg'),
      },

      {
        id: 7,
        name: 'T-shirt',
        price: '$79.99',
        image: require('./assets/Produits6.jpeg'),
      },

      {
        id: 8,
        name: 'T-shirt',
        price: '$79.99',
        image: require('./assets/Produits7.jpeg'),
      },

      {
        id: 9,
        name: 'T-shirt',
        price: '$79.99',
        image: require('./assets/Produits10.jpeg'),
      },

      {
        id: 10,
        name: 'T-shirt',
        price: '$79.99',
        image: require('./assets/Produits11.jpeg'),
      },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.title}>T-shirt pour Femme</Text>
      <ScrollView contentContainerStyle={styles.productContainer}>
        {products.map(product => (
          <View style={styles.productCard} key={product.id}>
            <Image
              source={product.image}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  productContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '45%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    textAlign: 'center',
    color: '#black',
  },
});

export default Femme;




