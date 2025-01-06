import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      id
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      emoji
      name
      code
    }
  }
`;