import { Url } from "url";

// TODO: define interface
export interface PersonType {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string 
  filmsUrl: string[]
  films:string[]
  species: string
  vehicles: string[]
  starships: string[]
  title: string[]
}

export interface FilmType {
  title?: string[]
  films: string[]
}

