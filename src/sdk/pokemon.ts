import PokeAPI from 'pokedex-promise-v2';
import {get} from './api';

export const getPokemonList = async (
  offset: number,
  inputFilter?: string,
  generation?: string,
  sortFilter?: string,
) => {
  const limit: number = 20;

  const filter =
    inputFilter !== undefined && inputFilter.length > 0
      ? `,where: {name: {_iregex: "${inputFilter}"}}`
      : '';

  const sort =
    sortFilter !== undefined && sortFilter.length > 0
      ? getSortType(sortFilter)
      : '';

  const query = `query samplePokeAPIquery {
    pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}${sort}${filter}) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
          id
        }
        slot
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
        slot
      }
      species: pokemon_v2_pokemonspecy {
        gender_rate
        has_gender_differences
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            name
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
    case 'type-asc':
      value =
        ', order_by: {pokemon_v2_pokemontypes_aggregate: {avg: {type_id: asc}}}';
      break;
    case 'type-desc':
      value =
        ', order_by: {pokemon_v2_pokemontypes_aggregate: {avg: {type_id: desc}}}';
      break;

    default:
      value = ', order_by: {name: asc}';
      break;
  }

  return value;
};

/*
query samplePokeAPIquery {
  gen1_species: pokemon_v2_pokemonspecies(
    where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
  ) {
    name
    id
  }
}
*/
