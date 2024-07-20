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

  /**
   * Evolución por nivel
   * Evolución por piedras elementales
   * Evolución por intercambio
   * Evolución por intercambio con objeto equipado
   * Evolución por felicidad
   * Evolución por belleza
   * Evolución por afecto
   * Evolución según sus estadísticas de combate
   * Evolución al subir de nivel al conocer un determinado movimiento
   * Evolución en un lugar determinado
   * Evolución por subir un nivel con cierto objeto equipado
   * Evolución al ser de un determinado género
   * Evolución con un determinado Pokémon en el equipo
   * Evolución con genes específicos
   * Evolución por intercambio de determinado Pokémon
   * Evolución por nivel con la consola en una posición
   * Evolución por un clima determinado
   */

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
