import React from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { Link } from '@react-navigation/native';

export default function Home() {
  return (<>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>UrbanStyle</Text>
      <View style={styles.categories}>
        <Link to={{ screen: 'Femme'}} style={styles.link}>
          FEMME
        </Link>
        <Link to={{ screen: 'Homme'}} style={styles.link}>
          HOMME
        </Link>
      </View>
      <Swiper style={styles.swiperContainer} showsButtons={false} autoplay={true}>
        <ImageBackground
          source={require('./img1.jpeg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.subtitle}></Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('./img2.jpeg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.subtitle}></Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('./img3.jpeg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.subtitle}></Text>
          </View>
        </ImageBackground>
      </Swiper>
      
      <View style={styles.imageContainer}>
        <Text style={styles.subtitle}></Text>
        <ScrollView horizontal>
          <Image
            source={require('./img4.jpeg')}
            style={styles.additionalImage}
            resizeMode="cover"
          />
          <Image
            source={require('./img5.jpeg')}
            style={styles.additionalImage}
            resizeMode="cover"
          />
          <Image
            source={require('./img6.jpeg')}
            style={styles.additionalImage}
            resizeMode="cover"
          />
        
        </ScrollView>
      </View>
    </ScrollView>

    <View style={styles.bottomBar}>
      <Ionicons name="home" size={28} color="#666" />
      <Ionicons name="search" size={28} color="#666" />
      <Ionicons name="cart" size={28} color="#666" />
      <Ionicons name="person" size={28} color="#666" />
    </View>
    <StatusBar style="auto" />
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    textTransform: 'uppercase',
    fontFamily: 'Mexicain', 
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'lato',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom:100
  },
  additionalImage: {
    width: 150,
    height: 180,
    marginRight: 10,
    borderRadius: 10,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 30,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: 20,
  },
});
