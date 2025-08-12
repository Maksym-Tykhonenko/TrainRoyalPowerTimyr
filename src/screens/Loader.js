import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ImageBackground,
  Image,
} from 'react-native';

const Loader = () => {
  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;
  const appearingTreeAnim = useRef(new Animated.Value(0)).current;
  const appearingFoureAnim = useRef(new Animated.Value(0)).current;
  const appearingFiveAnim = useRef(new Animated.Value(0)).current;
  const appearingSixAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingTreeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingFoureAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingFiveAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSixAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 5000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}
    >
      <Animated.Image
        style={{ flex: 1, opacity: appearingAnim, position: 'absolute' }}
        source={require('../assets/load/load6.png')}
      />
      <Animated.Image
        style={{ flex: 1, opacity: appearingSecondAnim, position: 'absolute' }}
        source={require('../assets/load/load1.png')}
      />
      <Animated.Image
        style={{ flex: 1, opacity: appearingTreeAnim, position: 'absolute' }}
        source={require('../assets/load/load2.png')}
      />
      <Animated.Image
        style={{ flex: 1, opacity: appearingFoureAnim, position: 'absolute' }}
        source={require('../assets/load/load3.png')}
      />
      <Animated.Image
        style={{ flex: 1, opacity: appearingFiveAnim, position: 'absolute' }}
        source={require('../assets/load/load4.png')}
      />
      <Animated.Image
        style={{ flex: 1, opacity: appearingSixAnim, position: 'absolute' }}
        source={require('../assets/load/load5.png')}
      />
    </View>
  );
};

export default Loader;
