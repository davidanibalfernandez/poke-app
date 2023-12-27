import PokeAPI from 'pokedex-promise-v2';
import {get} from './api';

const myInit = {
  method: 'GET',
  cache: 'default',
};

export const getPokemonList = async () => {
  return await get<Array<PokeAPI.Pokemon>>('', myInit);
};

export const getPokemonByNumber = async (number: string) => {
  return await get<PokeAPI.Pokemon>(`pokemon/${number}`, myInit);
};
