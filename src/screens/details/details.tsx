import React, {useEffect, useState} from 'react';
import {
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {getPokemonByNumber} from '../../sdk/pokemon';
import PokeAPI from 'pokedex-promise-v2';
import {Abilities} from '../../components/details/abilities';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
import {Stats} from '../../components/details/stats';
import {SvgXml} from 'react-native-svg';
import ArrowBackButton from '../../assets/icons/arrowBackButton';
import {StrengthsAndWeaknesses} from '../../components/details/weaknesses';
import {styles} from './details.styles';
import {General} from '../../components/details/general';

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
        <ImageBackground
          source={require('../../assets/images/pokeBallLogo.png')}>
          <ScrollView style={{padding: 16}}>
            <General pokemon={pokemon} />
            <Abilities abilities={pokemon?.abilities} />
            <Stats stats={pokemon?.stats} />
            <StrengthsAndWeaknesses types={pokemon?.types} />
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Pokedex')}>
              <SvgXml xml={ArrowBackButton()} width={22} height={22} />
              <Text style={styles.text}>Explore more pokemon</Text>
            </Pressable>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  } else {
    return '';
  }
}
