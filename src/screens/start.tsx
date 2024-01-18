import React from 'react';
import {SafeAreaView, Text, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SvgXml} from 'react-native-svg';
import PokeBallLogo from '../assets/images/pokeBallLogo.tsx';
import {RootStackParamList} from '../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Start'>;

export default function StartScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        colors={['rgba(250, 186, 186, 1)', 'rgba(250, 186, 186, 0)']}
        style={styles.gradient}>
        <Text style={styles.text1}>Pokédex</Text>
        <Text style={styles.text2}>App</Text>
        <View>
          <SvgXml xml={PokeBallLogo()} width={302} height={302} />
        </View>
        <Pressable onPress={() => navigation.navigate('Pokedex')}>
          <Text style={styles.button}>Enter</Text>
        </Pressable>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  text1: {
    fontSize: 56,
    fontWeight: '900',
    color: '#fff',
    marginTop: 100
  },
  text2: {
    fontSize: 56,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginTop: 56,
  },
});