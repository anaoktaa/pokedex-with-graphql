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
