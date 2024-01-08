import React from 'react';
import {Text, View, Image} from 'react-native';
import {Badge} from '../../shared/badge';
import PokeAPI from 'pokedex-promise-v2';
import {styles} from './evolutionLine.styles';

interface Props {
  number: number;
  name: string;
  sprites: string | undefined;
  types: PokeAPI.PokemonType[];
}

export default function EvolutionLine({
  number,
  name,
  sprites,
  types,
}: Props): React.JSX.Element {
  const image = JSON.parse(sprites ?? '') as PokeAPI.PokemonSprites;

  return (
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
  );
}
