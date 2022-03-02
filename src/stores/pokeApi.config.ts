export const pokeConfig = {
  baseUrl: import.meta.env.VITE_API_BASE,
  imageUrl: import.meta.env.VITE_POKE_IMAGE_BASE,
  endpoint: {
    pokemon: 'pokemon',
    species: 'pokemon-species',
    evolution: 'evolution-chain'
  }
}