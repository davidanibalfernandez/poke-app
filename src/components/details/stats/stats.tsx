import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import PokeAPI from 'pokedex-promise-v2';
import {styles} from './stats.styles';
import {getColorStat, getStatName} from '../../../utils/functions';

interface Props {
  stats: PokeAPI.PokemonStat[];
}

export default function Stats({stats}: Props): React.JSX.Element {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (stats) {
      const sum = stats.reduce(
        (accumulator, currentValue) => accumulator + currentValue.base_stat,
        0,
      );

      setTotal(sum);
    }
  }, [stats]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      {stats.map(s => (
        <View key={s.id} style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{getStatName(s.stat.name)}</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text
              style={{
                ...styles.value,
                backgroundColor: getColorStat(s.stat.name),
                maxWidth: s.base_stat + s.base_stat,
                width: s.base_stat + s.base_stat,
              }}>
              {s.base_stat}
            </Text>
          </View>
        </View>
      ))}
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Total</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text
            style={{
              ...styles.value,
              backgroundColor: getColorStat('total'),
              maxWidth: '100%',
              width: total,
            }}>
            {total}
          </Text>
        </View>
      </View>
    </View>
  );
}
