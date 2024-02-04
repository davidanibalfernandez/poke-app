/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import {getPokemonList} from '../../sdk/pokemon';
import PokeAPI from 'pokedex-promise-v2';
import {Card} from '../../components/home/card';
import {styles} from './home.styles';
import {Header} from '../../components/home/header';

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<PokeAPI.Pokemon[]>([]);
  const [currentLimit, setCurrentLimit] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>('');
  const [sortPokemon, setSortPokemon] = useState<string>('number-asc');
  const [filters, setFilters] = useState<string>();
  const [firstLoad, setFirstLoad] = useState<boolean>(true); // this state is used to remove a double fetch from the function run in the first run useEffect

  const run = async (limit: number) => {
    await getPokemonList(limit, searchInput, filters, sortPokemon)
      .then(data => {
        setFirstLoad(false); // change the state to false when the first data come from the API
        return data.data.pokemon_v2_pokemon;
      })
      .then(data => {
        setPokemons(prep => [...prep, ...data]);
      })
      .catch(error => console.error(error));
  };

  // first run of the list
  useEffect(() => {
    run(currentLimit);
  }, []);

  // run every time the limit of pagination change
  useEffect(() => {
    if (currentLimit > 0) {
      run(currentLimit);
    }
  }, [currentLimit]);

  // run every time when the sort or any filter change
  useEffect(() => {    
    if (!firstLoad) {
      setCurrentLimit(0);
      setPokemons([]);
      run(0);
    }
  }, [searchInput, sortPokemon, filters]);

  return (
    <SafeAreaView style={styles.screen}>
      <Header
        setSearchInput={setSearchInput}
        setFilters={setFilters}
        setSortPokemon={setSortPokemon}
      />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainerStyle}
        columnWrapperStyle={styles.flatListColumnWrapperStyle} // affect the middle of the columns
        onEndReached={() => {
          // this if is to avoid the refetch in the first loading of the screen
          if (!firstLoad) {
            setCurrentLimit(prep => prep + 20);
          }
        }}
        onEndReachedThreshold={0.5}
        data={pokemons}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            number={item.id}
            name={item.name}
            sprites={item.sprites.at(0)?.sprites}
            types={item.types}
          />
        )}
        ListFooterComponent={
          <ActivityIndicator
            size={'large'}
            style={styles.loaderSpinner}
            color={'#AEAEAE'}
          />
        }
      />
    </SafeAreaView>
  );
}
