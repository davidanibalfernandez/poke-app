import React, {useState} from 'react';
import {View, Pressable, Modal, TextInput, Text} from 'react-native';
import {styles} from './header.styles';
import {SvgXml} from 'react-native-svg';
import {FilterIcon} from '../../../assets';
import {Checkbox, RadioButton} from 'react-native-paper';
import {sorts, generations} from '../../../utils/constants';

interface Props {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSortPokemon: React.Dispatch<React.SetStateAction<string>>;
  setFilters: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function Header({
  setSearchInput,
  setSortPokemon,
  setFilters,
}: Props): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [checkboxState, setCheckboxState] = useState<string>('');
  const [sortState, setSortState] = useState<string>('');

  /**
   * get the states used to select in the modal and update the states for change the query to fetch the pokemons
   */
  const submit = () => {
    setFilters(checkboxState);
    setSortPokemon(sortState);
  };

  return (
    <View style={styles.inputGroupContainer}>
      <View style={styles.inputFilterContainer}>
        <TextInput
          style={styles.input}
          onEndEditing={event => setSearchInput(event.nativeEvent.text)}
          placeholder="Search by Name"
          autoCapitalize={'none'}
        />
      </View>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.filterInputButtonContainer}>
          <SvgXml xml={FilterIcon()} width={16} height={16} />
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <View style={styles.modalColumns}>
              <Text>Filtros</Text>
              {generations.map((g, i) => (
                <View key={i} style={styles.checkBoxContainer}>
                  <RadioButton
                    value={g.value}
                    status={checkboxState === g.value ? 'checked' : 'unchecked'}
                    onPress={() => setCheckboxState(g.value)}
                  />
                  <Text>{g.label}</Text>
                </View>
              ))}
            </View>
            <View style={styles.modalColumns}>
              <Text>Orden</Text>
              {sorts.map((s, i) => {
                return (
                  <View key={i} style={styles.radioButtonContainer}>
                    <RadioButton
                      value={s.value}
                      status={
                        sortState.includes(s.value) ? 'checked' : 'unchecked'
                      }
                      onPress={() => setSortState(s.value)}
                    />
                    <Text>{s.label}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.modalFooter}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                submit();
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Close filters</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonResetFilter]}
              onPress={() => {
                setCheckboxState('');
                setSortState('');
              }}>
              <Text style={styles.textStyle}>Reset filters</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
