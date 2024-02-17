import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import {Badge} from '../../shared/badge';
import PokeAPI from 'pokedex-promise-v2';
import {styles} from './general.styles';
import { SvgXml } from 'react-native-svg';
import {NoPokemon} from '../../../assets/index';
import {convert} from 'inkunits';
import { getGenderRatio } from '../../../utils/functions';

interface Props {
  pokemon: PokeAPI.Pokemon;
}

export default function General({
  pokemon,
}: Props): React.JSX.Element {
  const {id, name, sprites, types, weight, height, species } = pokemon;
  const gender = getGenderRatio(species.gender_rate);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={styles.container}>
      <View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {sprites.at(0)?.sprites.front_default !== null ? (
          <Image
            source={{
              uri: sprites.at(0)?.sprites.front_default,
            }}
            style={styles.image}
          />
        ) : (
          <SvgXml xml={NoPokemon()} width={88} height={88} />
        )}
      </View>
      <Text style={styles.number}>#{id}</Text>
      <View style={styles.textAndTypesContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          {/* <Text style={styles.name}>{JapaneseName}</Text> */}
        </View>
        <View style={styles.badgeContainer}>
          {types.map((t, i) => (
            <Badge key={i} color={t.type.name} />
          ))}
        </View>
      </View>
      <View style={styles.generalDetailsContainer}>
        <View style={styles.generalTextContainer}>
          <Text style={styles.generalText}>Height</Text>
          <Text style={styles.generalText}>
            {(
              Math.round(convert(height).from('dm').to('m') * 100) / 100
            ).toFixed(2)}{' '}
            m
          </Text>
        </View>
        <View style={styles.generalTextContainer}>
          <Text style={styles.generalText}>Weight</Text>
          <Text style={styles.generalText}>
            {(
              Math.round(convert(weight).from('hg').to('kg') * 100) / 100
            ).toFixed(2)}{' '}
            kg
          </Text>
        </View>
        <View style={styles.generalTextContainer}>
          <Text style={styles.generalText}>Gender</Text>
          {gender.isUnknown ? (
            <Text style={styles.generalText}>Unknown</Text>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <Text style={(styles.generalText, {color: '#606DE3'})}>
                {gender.male}
              </Text>
              <Text style={(styles.generalText, {color: '#DB59B7'})}>
                {gender.female}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
