import { defineStore } from 'pinia';
import axios from 'axios';
import { pokeConfig } from '@/stores/pokeApi.config';
import type { PokeDetails, PokeDetailsResponse, PokeSpeciesResponse, PokeStat } from '@/interfaces/pokemonDetails.interface';
import _ from 'lodash';

export const usePokeDetailsStore = defineStore('pokeDetails', {
  state: () => {
    return {
      error: '',
      details: {
        evolutions: []
      } as PokeDetails
    };
  },
  actions: {
    async fetchPokeDetails(id: string | string[] | number) {
      try {
        this.$reset();
        const { baseUrl, endpoint } = pokeConfig;
        const response = await axios.get(`${baseUrl}/${endpoint.pokemon}/${id}`);
        const result: PokeDetailsResponse = response.data;

        this.$patch({
          details: {
            id: result.id,
            name: result.name,
            imageUrl: `${pokeConfig.imageUrl}/${result.id}.svg`,
            abilities: _.map(result.abilities, 'ability.name'),
            stats: this.transformStats(result.stats),
            types: _.map(result.types, 'type.name'),
            moves: _.map(result.moves, 'move.name'),
          }
        })

        this.fetchSpecies(result.id);
      } catch {
        this.$state.error = 'Pokemon not found'
      }
    },

    async fetchSpecies(id: string | string[] | number) {
      const { baseUrl, endpoint } = pokeConfig;
      const response = await axios.get(`${baseUrl}/${endpoint.species}/${id}`);
      const result: PokeSpeciesResponse = response.data;
      this.$patch({
        details: {
          about: this.transformAboutDetails(result.flavor_text_entries)
        }
      })
      
      this.fetchEvolutionChain(result.evolution_chain.url);
    },

    async fetchEvolutionChain(url: string) {
      const { baseUrl, endpoint } = pokeConfig;
      const response = await axios.get(url);
      const result = response.data;
      this.$patch((state) => {
        state.details.evolutions.push(result.chain.species.name)
      })
      this.transformEvolution(result.chain.evolves_to)
    },

    transformStats(stats: PokeStat[]): PokeStat[] {
      return stats.map((stat) => {
        return {
          base_stat: stat.base_stat,
          stat: {
            name: stat.stat.name
          }
        }
      });
    },

    transformAboutDetails(aboutDetails: any) {
      const filteredAbout = _.filter(aboutDetails, (flavor) => {
        return flavor.language.name === 'en'
      });
      return _.map(filteredAbout, 'flavor_text');
    },

    transformEvolution(evolvesTo: any) {
      if (!evolvesTo.length) {
        return;
      }
      evolvesTo.forEach((evolves: any) => {
        if (_.has(evolves, 'species')) {
          this.$patch((state) => {
            state.details.evolutions.push(evolves.species.name)
          })

          if (_.has(evolves, 'evolves_to')) {
            this.transformEvolution(evolves.evolves_to)
          }
        }
      });
    }
  }

})