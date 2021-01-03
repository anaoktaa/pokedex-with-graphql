import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        results {
          url
          name
          image
          id
        }
    }
  }
`;

export const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
        id
        name
        abilities {
            ability {
              url
              name
            }
        }
        height
        weight
        sprites {
            back_default
            back_female
            back_shiny
            back_shiny_female
            front_default
            front_female
            front_shiny
            front_shiny_female
        }
        moves {
            move {
              name
            }
        }
        stats {
          base_stat
          effort
          stat {
            name
        
          }
        }
        types {
            type {
            name
            }
        }
        message
        status
        }
    }
`;

export const GET_ABILITY = gql`
  query ability($ability: String!) {
    ability(ability: $ability) {
      params
      status
      message
      response
    }
  }
`;
