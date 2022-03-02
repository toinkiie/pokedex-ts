export type PokeDetails = {
  id?: string | number,
  name?: string,
  imageUrl?: string,
  about?: Array<any>,
  abilities?: Array<string> | null,
  stats?: PokeStat[] | null,
  types?: Array<string> | null,
  evolutions?: any,
  strengths?: Array<string> | null,
  weakness?: Array<string> | null,
  moves?: Array<string> | null
}

export type PokeStat = {
  'base_stat': number,
  stat: {
    name: string,
  }
}

export type PokeDetailsResponse = {
  id: string | number,
  name: string,
  abilities: any,
  moves: any,
  stats: any,
  types: any
}


export type PokeSpeciesResponse = {
  color: {
    name: string
  }
  flavor_text_entries: Array<any>,
  evolution_chain: {
    url: string
  }
}