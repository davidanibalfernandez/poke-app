import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getColorType} from '../../../utils/functions';

interface Props {
  color: string;
}

export default function Badge({color}: Props): React.JSX.Element {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColorType(color),
      borderRadius: 8,
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 12,
      fontWeight: '500',
      color: '#FFF',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{color}</Text>
    </View>
  );
}
