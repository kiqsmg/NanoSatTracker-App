import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Update the image path if using a local file
const cubesatBackground = require('../../assets/images/cubesat_background.webp'); // Adjust the path as needed

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={cubesatBackground} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Spacelab - NanosatTracker</Text>
        <Text style={styles.subtitle}>Developing new systems to bring data from space to earth</Text>
        <TouchableOpacity onPress={() => { /* Handle GitHub link */ }}>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'grey', // Adjust if necessary
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    position: 'relative',
    padding: 16,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
  },
  link: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default Home;
