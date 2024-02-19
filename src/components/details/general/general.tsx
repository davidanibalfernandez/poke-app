import React from 'react';
import {Text, View, Image} from 'react-native';
import {Badge} from '../../shared/badge';
import PokeAPI from 'pokedex-promise-v2';
import {styles} from './general.styles';
import { SvgXml } from 'react-native-svg';
import {NoPokemon} from '../../../assets/index';
import {convert} from 'inkunits';
import { getGenderRatio } from '../../../utils/functions';
import { CustomSwitch } from '../../shared/custom-switch';


interface Props {
  pokemon: PokeAPI.Pokemon;
}

export default function General({
  pokemon,
}: Props): React.JSX.Element {
  const {id, name, sprites, types, weight, height, species } = pokemon;
  const gender = getGenderRatio(species.gender_rate);
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CustomSwitch isShiny={isEnabled} setIsShiny={setIsEnabled} />
        {/* <Switch
          value={!isEnabled}
          onValueChange={toggleSwitch}
          containerStyle={{width: 172, height: 30}}
          activeText={'normal'}
          inActiveText={'shiny'}
          backgroundActive={'#E3350D'}
          backgroundInactive={'#F3D23B'}
          circleActiveColor={'#30a566'}
          circleInActiveColor={'#000000'}
        /> */}
        {isEnabled === true ? (
          sprites.at(0)?.sprites.front_shiny !== null ? (
            <Image
              source={{
                uri: sprites.at(0)?.sprites.front_shiny,
              }}
              style={styles.image}
            />
          ) : (
            <SvgXml xml={NoPokemon()} width={88} height={88} />
          )
        ) : sprites.at(0)?.sprites.front_default !== null ? (
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
