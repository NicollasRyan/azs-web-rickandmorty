import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
    query {
        episodes {
            results {
                id
                name
                air_date
                episode
                characters {
                    id
                    name
                    species
                    type
                    gender

                }
            }
        }
    }
`;

export const GET_EPISODE_BY_ID = gql`
  query ($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
        species
        status
      }
    }
  }
`;

export const GET_EPISODES_BY_IDS = gql`
  query ($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
        species
        status
      }
    }
  }
`;

export const GET_EPISODES_BY_NAME = gql`
  query GetEpisodesByName($name: String!) {
    episodes(filter: { name: $name }) {
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`;
