
export type PokeList = {
  id: number | string,
  name: string,
  imageUrl: string
}

export type ResoureResult = {
  name: string,
  url: string
}

export type ResourceResponse = {
  count: number,
  next: string,
  previous: string, 
  results: ResoureResult[]
}

export type SearchResultResponse = {
  id: number | string,
  name: string
}
