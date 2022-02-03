import { PercentPipe } from "@angular/common";

export type SearchData = {
  search?: string;
  page?: string;
};

export type List<T> = {
  count: number;
  previous: string | null;
  next: string | null;
  results: T[];
};

export type Person = {
  name: string; // The name of this person.
  birth_year: string; // The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
  eye_color: string; // The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
  gender: string; // The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
  hair_color: string; // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height: number; // The height of the person in centimeters.
  mass: number; // The mass of the person in kilograms.
  skin_color: string; // The skin color of this person.
  homeworld: string; // The URL of a planet resource, a planet that this person was born on or inhabits.
  films: string[]; // An array of film resource URLs that this person has been in.
  species: string[]; // of species resource URLs that this person belongs to.
  starships: string[]; // of starship resource URLs that this person has piloted.
  vehicles: string[]; // of vehicle resource URLs that this person has piloted.
  url: string; // the hypermedia URL of this resource.
  created: Date; // the ISO 8601 date format of the time that this resource was created.
  edited: Date; // the ISO 8601 date format of the time that this resource was edited.
};

export type Specie = {
  name: string; // The name of this species.
  classification: string; // The classification of this species, such as "mammal" or "reptile".
  designation: string; // The designation of this species, such as "sentient".
  average_height: number; // The average height of this species in centimeters.
  average_lifespan: number; // The average lifespan of this species in years.
  eye_colors: string; // A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
  hair_colors: string; // A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
  skin_colors: string; // A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
  language: string; // The language commonly spoken by this species.
  homeworld: string; // The URL of a planet resource, a planet that this species originates from.
  people: string[]; // An array of People URL Resources that are a part of this species.
  films: string[]; // An array of Film URL Resources that this species has appeared in.
  url: string; // the hypermedia URL of this resource.
  created: Date; // the ISO 8601 date format of the time that this resource was created.
  edited: Date; //the ISO 8601 date format of the time that this resource was edited.
};

export type Planet = {
  name: string; // The name of this planet.
  diameter: number; // The diameter of this planet in kilometers.
  rotation_period: number; // The number of standard hours it takes for this planet to complete a single rotation on its axis.
  orbital_period: number; // The number of standard days it takes for this planet to complete a single orbit of its local star.
  gravity: string; // A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
  population: number; // The average population of sentient beings inhabiting this planet.
  climate: string; // The climate of this planet. Comma separated if diverse.
  terrain: string; // The terrain of this planet. Comma separated if diverse.
  surface_water: string; // The percentage of the planet surface that is naturally occurring water or bodies of water.
  residents: string[]; // An array of People URL Resources that live on this planet.
  films: string[]; //An array of Film URL Resources that this planet has appeared in.
  url: string; // the hypermedia URL of this resource.
  created: Date; // the ISO 8601 date format of the time that this resource was created.
  edited: Date; // the ISO 8601 date format of the time that this resource was edited.
};

// Parser Functions
export function parseList(data: any): List<unknown> {
  return {
    ...data,
    count: parseInt(data.count),
  };
}

export function parseResult(data: any): any & {
  created: Date;
  edited: Date;
} {
  return {
    created: new Date(data.created),
    edited: new Date(data.edited),
  };
}
export function parsePerson(data: any): Person {
  return {
    ...data,
    ...parseResult(data),
    height: parseFloat(data.height),
    mass: parseFloat(data.mass),
  };
}

export function parsePeopleList(data: any): List<Person> {
  return {
    ...parseList(data),
    results: (data.results || []).map((data: any) => parsePerson(data)),
  };
}

//Specie
export function parseSpecie(data: any): Specie {
  return {
    ...data,
    ...parseResult(data),
    average_height: parseFloat(data.average_height),
    average_lifespan: parseFloat(data.average_lifespan),
  };
}

export function parseSpecieList(data: any): List<Specie> {
  return {
    ...parseList(data),
    results: (data.results || []).map((data: any) => parseSpecie(data)),
  };
}


//Planet
export function parsePlanet(data: any): Planet {
  return {
    ...data,
    ...parseResult(data),
    diameter: parseFloat(data.diameter),
    rotation_period: parseFloat(data.rotation_period),
    orbital_period: parseFloat(data.orbital_period),
    population: parseFloat(data.rotation_period),
  };
}

export function parsePlanetList(data: any): List<Planet> {

  return {
    ...parseList(data),
    results: (data.results || []).map((data: any) => parsePlanet(data)),
  };
}
