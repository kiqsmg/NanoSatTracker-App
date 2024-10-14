import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const AnimatedBox = ({ height, backgroundColor, delay, children }) => {
  const translateY = useRef(new Animated.Value(50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 2000,
      delay: delay,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, [translateY, opacity, delay]);

  return (
    <Animated.View
      style={[
        styles.boxContainer,
        {
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <View style={[styles.box, { height, backgroundColor }]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Animated.View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <AnimatedBox height={120} backgroundColor="silver" delay={0}>
        KB9JHU{"\n"}{"\n"}5X
      </AnimatedBox>
      <AnimatedBox height={150} backgroundColor="gold" delay={200}>
        DK3WN{"\n"}{"\n"}8X
      </AnimatedBox>
      <AnimatedBox height={90} backgroundColor="#cd7f32" delay={400}>
        ZR1ADC{"\n"}{"\n"}5X
      </AnimatedBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  boxContainer: {
    width: 100,
    marginHorizontal: 10,
    textAlign: 'center',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#ffffff',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    borderRadius: 10,
  },
  text: {
    color: '#000000',
    textAlign: 'center',
  },
});

export default App;
