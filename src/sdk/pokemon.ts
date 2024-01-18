import PokeAPI from 'pokedex-promise-v2';
import {get} from './api';

export const getPokemonList = async (
  offset: number,
  inputFilter?: string,
  filters?: string[],
  sortFilter?: string,
) => {
  const limit: number = 20;

  // filter by id less than equal to 1025 will remove the pokemon that are not valid in the pokedex
  const filter =
    inputFilter !== undefined && inputFilter.length > 0
      ? `,where: {id: {_lte: 1025}, name: {_iregex: "${inputFilter}"}}`
      : ',where: {id: {_lte: 1025}}';

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

    default:
      value = ', order_by: {id: asc}';
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

// # query samplePokeAPIquery2 {
// #   pokemon_v2_pokemon(where: {name: {_eq: "eevee"}}) {
// #     id
// #     name
// #     species: pokemon_v2_pokemonspecy {
// #       gender_rate
// #       has_gender_differences
// #       pokemon_v2_evolutionchain {
// #         pokemon_v2_pokemonspecies {
// #           name
// #           pokemon_v2_pokemonevolutions {
// #             min_level
// #             needs_overworld_rain
// #             min_beauty
// #             min_affection
// #             min_happiness
// #             gender_id
// #             trade_species_id
// #             time_of_day
// #             relative_physical_stats
// #             pokemon_v2_item {
// #               name
// #             }
// #             location_id
// #             known_move_id
// #             held_item_id
// #             known_move_type_id
// #           }
// #         }
// #       }
// #     }
// #   }
// # }
