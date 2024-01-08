import React, {useEffect, useState} from 'react';
import {Text, Pressable, SafeAreaView, StyleSheet} from 'react-native';
import {getPokemonByNumber} from '../sdk/pokemon';
import PokeAPI from 'pokedex-promise-v2';
import {Abilities} from '../components/details/abilities';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/types';
import {Stats} from '../components/details/stats';
import {SvgXml} from 'react-native-svg';
import ArrowBackButton from '../assets/arrowBackButton';
import {StrengthsAndWeaknesses} from '../components/details/weaknesses';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({route, navigation}: Props) {
  const {id} = route.params;
  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon>();

  const run = async (number: number) => {
    await getPokemonByNumber(number)
      .then(data => {
        return data.data.pokemon_v2_pokemon.at(0);
      })
      .then(data => {
        setPokemon(data);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    if (id !== 0) {
      run(id);
    }
  }, [id]);

  if (pokemon !== undefined) {
    return (
      <SafeAreaView style={styles.screen}>

        <Abilities abilities={pokemon?.abilities} />
        <Stats stats={pokemon?.stats} />
        <StrengthsAndWeaknesses types={pokemon?.types} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Pokedex')}>
          <SvgXml xml={ArrowBackButton()} width={22} height={22} />
          <Text style={styles.text}>Explore more pokemon</Text>
        </Pressable>
      </SafeAreaView>
    );
  } else {
    return '';
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 32,
    backgroundColor: '#fff',
    padding: 16
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    backgroundColor: '#E3350D',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});
