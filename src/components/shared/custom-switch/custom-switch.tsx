import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {getColorType} from '../../../utils/functions';

interface Props {
  isShiny: boolean;
  setIsShiny: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CustomSwitch({isShiny, setIsShiny}: Props): React.JSX.Element {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F3F3F3',
      borderRadius: 4,
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
    },
    textBase: {
      flex: 1,
      fontSize: 12,
      paddingHorizontal: 16,
      paddingVertical: 4,
      borderRadius: 4,
    },
    textDefault: {
      fontWeight: '500',
      color: '#000000',
    },
    textSelected: {
      fontWeight: '700',
      color: '#FFF',
    },
    selectedDefault: {
      width: 80,
      paddingVertical: 4,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Pressable onPress={() => setIsShiny(previousState => !previousState)}>
      <View style={styles.container}>
        <View
          style={
            (styles.selectedDefault,
            {backgroundColor: !isShiny ? '#E3350D' : 'transparent'})
          }>
          <Text style={[styles.textBase, !isShiny ? styles.textSelected : styles.textDefault]}>
            Normal
          </Text>
        </View>
        <View
          style={
            (styles.selectedDefault,
            {backgroundColor: isShiny ? '#F3D23B' : 'transparent'})
          }>
          <Text style={[styles.textBase, isShiny ? styles.textSelected : styles.textDefault]}>
            Shiny
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
