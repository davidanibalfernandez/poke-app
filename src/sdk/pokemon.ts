import PokeAPI from 'pokedex-promise-v2';
import {get} from './api';
import {pokemonIdToRemoveFromPokedex} from '../utils/constants';

export const getPokemonList = async (
  offset: number,
  rawInputFilter?: string,
  rawGenFilter?: string,
  rawSortFilter?: string,
) => {
  const limit: number = 20;

  const sortFilter =
    rawSortFilter !== undefined && rawSortFilter.length > 0
      ? getSortType(rawSortFilter)
      : '';

      // get the input filter field in the list
  const inputFilter =
      rawInputFilter !== undefined && rawInputFilter.length > 0
        ? `name: {_iregex: "${rawInputFilter}"}`
        : '';
  
        // get the generation field in the modal
  const genFilter =
    rawGenFilter !== undefined && rawGenFilter.length > 0
      ? `pokemon_v2_pokemonforms: {_and: {pokemon_v2_pokemonformgenerations: {pokemon_v2_generation: {name: {_iregex: "${rawGenFilter}"}}}}}`
      : '';

  // filter by id less than equal to 1025 will remove the pokemon that are not valid in the pokedex
  // check the possibles added filter in the query. if the input filter and the generation filter both are used
  // will add a coma and at the start a open bracket and at finish the close bracket
  const filter =
    inputFilter.length > 0 || genFilter.length > 0
      ? `, where: {id: {_lte: ${pokemonIdToRemoveFromPokedex}}, _and: ${
          inputFilter.length > 0 || genFilter.length > 0 ? '{' : ''
        }${inputFilter}${
          inputFilter.length > 0 && genFilter.length > 0 ? ', ' : ''
        }${genFilter}${
          inputFilter.length > 0 || genFilter.length > 0 ? '}' : ''
        }}`
      : `, where: {id: {_lte: ${pokemonIdToRemoveFromPokedex}}}`;

  const query = `query samplePokeAPIquery {
    pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}${sortFilter}${filter}) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
          id
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }`;

  const options = {
    body: JSON.stringify({query}),
  };

  return await get<{data: {pokemon_v2_pokemon: Array<PokeAPI.Pokemon>}}>(
    options,
  );
};

export const getPokemonByNumber = async (number: number) => {
  const query = `query samplePokeAPIquery {
    pokemon_v2_pokemon(where: {id: {_eq: ${number}}}) {
      id
      name
      height
      weight
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
          id
          damage_relations: pokemonV2TypeefficaciesByTargetTypeId {
            damage_factor
            type: pokemon_v2_type {
              name
              id
            }
          }
        }
      }
      species: pokemon_v2_pokemonspecy {
        gender_rate
        has_gender_differences
        flavor_text_entries: pokemon_v2_pokemonspeciesflavortexts {
          flavor_text
        }
        evolution_chain: pokemon_v2_evolutionchain {
          chain: pokemon_v2_pokemonspecies {
            name
            pokemon: pokemon_v2_pokemons(where: {id: {_lte: 1025}}) {
              sprites: pokemon_v2_pokemonsprites {
                sprites
              }
            }
            evolution_details: pokemon_v2_pokemonevolutions {
              min_affection
              min_beauty
              min_happiness
              min_level
              time_of_day
              turn_upside_down
              relative_physical_stats
              needs_overworld_rain
              location: pokemon_v2_location {
                name
              }
              item: pokemon_v2_item {
                name
              }
              gender: pokemon_v2_gender {
                name
              }
              trigger: pokemon_v2_evolutiontrigger {
                name
              }
              held_item: pokemonV2ItemByHeldItemId {
                name
              }
              known_move: pokemon_v2_move {
                name
              }
              party_species: pokemonV2PokemonspecyByPartySpeciesId {
                name
              }
            }
          }
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
          id
        }
        is_hidden
      }
      stats: pokemon_v2_pokemonstats {
        id
        base_stat
        effort
        stat: pokemon_v2_stat {
          name
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }`;

  const options = {
    body: JSON.stringify({query}),
  };

  return await get<{data: {pokemon_v2_pokemon: Array<PokeAPI.Pokemon>}}>(
    options,
  );
};

/**
 * get the sort type required in the query
 * @param type string
 * @returns string
 */
const getSortType = (type: string): string => {
  let value = '';
  switch (type) {
    case 'number-asc':
      value = ', order_by: {id: asc}';
      break;
    case 'number-desc':
      value = ', order_by: {id: desc}';
      break;
    case 'name-asc':
      value = ', order_by: {name: asc}';
      break;
    case 'name-desc':
      value = ', order_by: {name: desc}';
      break;
    case 'weight-asc':
      value = ', order_by: {weight: asc}';
      break;
    case 'weight-desc':
      value = ', order_by: {weight: desc}';
      break;
    case 'height-asc':
      value = ', order_by: {height: asc}';
      break;
    case 'height-desc':
      value = ', order_by: {height: desc}';
      break;

    default:
      value = ', order_by: {id: asc}';
      break;
  }

  return value;
};
