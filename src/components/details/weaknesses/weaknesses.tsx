import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import PokeAPI from 'pokedex-promise-v2';
import {styles} from './weaknesses.styles';
import {SvgXml} from 'react-native-svg';
import {getIconType, getColorType} from '../../../utils/functions';

interface Props {
  types: PokeAPI.PokemonType[];
}

export default function StrengthsAndWeaknesses({
  types,
}: Props): React.JSX.Element {
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [strengths, setStrengths] = useState<string[]>([]);

  useEffect(() => {
    if (types) {
      const rawWeaknesses: string[] = [];
      const rawStrengths: string[] = [];

      types.forEach(t => {
        t.type.damage_relations.map(dr => {
          if (dr.damage_factor > 100 && !rawWeaknesses.includes(dr.type.name)) {
            rawWeaknesses.push(dr.type.name);
          }
          if (dr.damage_factor < 100 && !rawStrengths.includes(dr.type.name)) {
            rawStrengths.push(dr.type.name);
          }
        });
      });

      setWeaknesses(rawWeaknesses);
      setStrengths(rawStrengths);
    }
  }, [types]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Strengths</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.iconsContainer}>
        {strengths.map((x, i) => (
          <View
            key={i}
            style={{...styles.icon, backgroundColor: getColorType(x)}}>
            <SvgXml xml={getIconType(x)} width={52} height={52} />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.title}>Weaknesses</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.iconsContainer}>
        {weaknesses.map((x, i) => (
          <View
            key={i}
            style={{...styles.icon, backgroundColor: getColorType(x)}}>
            <SvgXml xml={getIconType(x)} width={52} height={52} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
