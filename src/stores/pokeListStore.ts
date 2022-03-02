import { defineStore } from 'pinia'
import type { PokeList, ResourceResponse, SearchResultResponse } from '@/interfaces/pokemonList.interface'
import axios from 'axios'
import { pokeConfig } from '@/stores/pokeApi.config'
import _ from 'lodash';


export const usePokeListStore = defineStore('pokeList', {
  state: () => {
    return {
      count: 0,
      next: '',
      previous: '',
      pokeList: [] as PokeList[],
      preview: {} as PokeList,
      error: ''
    }
  },
  actions: {
    
    async fetchResource(endpoint = `${pokeConfig.baseUrl}/${pokeConfig.endpoint.pokemon}`) {
      const response = await axios.get(endpoint);
      const resource: ResourceResponse = response.data;
      this.setPaginationState(resource);
      
      this.pokeList = resource.results.map((result, index) => {
        const pokeId = this.getIdFromUrl(result.url)
        return this.makePokeList(pokeId, result.name);
      });;
    },

    
    async searchPokemon(term = '') {
      this.$reset();
      if (!term) {
        this.fetchNextResource();
        return
      }
      
      try {
        const response = await axios.get(`${pokeConfig.baseUrl}/${pokeConfig.endpoint.pokemon}/${term}`);
        const searchResult: SearchResultResponse = response.data;
        this.pokeList.push(this.makePokeList(searchResult.id, searchResult.name));
      } catch {
        this.$state.error = 'Pokemon not found';
      }
    },

    initializePokeList() {
      if (this.pokeList.length === 0) {
        this.fetchResource();
      }
    },

    fetchNextResource() {
      if (this.$state.next) {
        this.fetchResource(this.next);
      }
    },

    fetchPreviousResource() {
      if (this.$state.previous) {
        this.fetchResource(this.previous);
      }
    },

    setPokemonPreview(id: string | number) {
      console.log(id);
      this.$state.preview = <PokeList>_.find(this.$state.pokeList, (pokemon) => pokemon.id === id);
    },

    setPaginationState(resource: ResourceResponse) {
      const {count, next, previous } = resource;
      this.count = count;
      this.next = next;
      this.previous = previous;
    },

    getIdFromUrl(url: string): string {
      const splitUrl = url.split('/');
      return splitUrl[splitUrl.length - 2]
    },
    
    makePokeList(id: string | number, name: string) {
      return {
        id: id,
        imageUrl: `${pokeConfig.imageUrl}/${id}.svg`,
        name: name
      }
    }
  },
  getters: {
  }
})