import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {Badge} from '../../shared/badge';
import PokeAPI from 'pokedex-promise-v2';
import {styles} from './card.styles';
import {RootStackParamList} from '../../../utils/types';

interface Props {
  number: number;
  name: string;
  sprites: string | undefined;
  types: PokeAPI.PokemonType[];
}

export default function Card({
  number,
  name,
  sprites,
  types,
}: Props): React.JSX.Element {
  const image = JSON.parse(sprites ?? '') as PokeAPI.PokemonSprites;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Details', {
          id: number,
        })
      }>
      <View style={styles.container}>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Image
          source={{
            uri: image.front_default,
          }}
          style={styles.image}
        />
        <View style={styles.badgeContainer}>
          {types.map((t, i) => (
            <Badge key={i} color={t.type.name} />
          ))}
        </View>
      </View>
    </Pressable>
  );
}
