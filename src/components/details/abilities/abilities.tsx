import React from 'react';
import {Text, View} from 'react-native';
// import {Badge} from '../../shared/badge';
import PokeAPI from 'pokedex-promise-v2';
import {styles} from './abilities.styles';
import {randomColor} from '../../../utils/functions';

interface Props {
  abilities: PokeAPI.PokemonAbility[];
}

export default function Abilities({abilities}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.textHeader}>Abilities</Text>
        {abilities.map((a, i) => {
          if (a.is_hidden) {
            return (
              <Text
                key={i}
                style={{...styles.text, backgroundColor: randomColor()}}>
                {a.ability.name}
              </Text>
            );
          }
        })}
      </View>
      <View style={styles.column}>
        <Text style={styles.textHeader}>Hidden Ability</Text>
        {abilities.map((a, i) => {
          if (!a.is_hidden) {
            return (
              <Text
                key={i}
                style={{...styles.text, backgroundColor: randomColor()}}>
                {a.ability.name}
              </Text>
            );
          }
        })}
      </View>
    </View>
  );
}
