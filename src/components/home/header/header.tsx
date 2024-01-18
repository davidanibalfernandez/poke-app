import React, {useState} from 'react';
import {View, Pressable, Modal, TextInput, Text} from 'react-native';
import {styles} from './header.styles';
import {SvgXml} from 'react-native-svg';
import {FilterIcon} from '../../../assets';
import {Checkbox, RadioButton} from 'react-native-paper';
import {sorts} from '../../../utils/constants';

interface Props {
  searchInput: string;
  sortPokemon: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSortPokemon: React.Dispatch<React.SetStateAction<string>>;
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  filters: string[];
}

export default function Header({
  searchInput,
  sortPokemon,
  setSearchInput,
  setSortPokemon,
  setFilters,
  filters,
}: Props): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [checkboxState, setCheckboxState] = useState<boolean>(false);

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
              <Checkbox
                status={checkboxState ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckboxState(!checkboxState);
                }}
              />
            </View>
            <View style={styles.modalColumns}>
              {sorts.map((s, i) => {
                return (
                  <View key={i} style={styles.radioButtonContainer}>
                    <RadioButton
                      value={s.value}
                      status={
                        sortPokemon.includes(s.value) ? 'checked' : 'unchecked'
                      }
                      onPress={() => setSortPokemon(s.value)}
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
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
