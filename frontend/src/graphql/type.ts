export interface Continent {
  id: string;
  name: string;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  emoji: string;
  continent: Continent;
}

export interface GetContinentsData {
  continents: Continent[];
}

export interface GetCountriesData {
  countries: Country[];
}

export interface GetCountryData {
  country: Country;
}

export interface GetCountryVars {
  code: string;
}
