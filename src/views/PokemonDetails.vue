<script setup lang="ts">
import SearchPokemon from '@/components/PokemonSearch.vue'
import { onMounted } from 'vue';
import { usePokeDetailsStore } from '@/stores/pokeDetailsStore';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router'
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonType from '../components/PokemonType.vue';
import PokemonAbilities from '../components/PokemonAbilities.vue';
import PokemonStat from '../components/PokemonStat.vue';
import PokemonMoves from '../components/PokemonMoves.vue';
import PokemonAbout from '../components/PokemonAbout.vue';
import PokemonEvolution from '../components/PokemonEvolution.vue';
import PokemonMessageScreen from '@/components/PokemonMessage.vue'

const route = useRoute();
const pokeDetailsStore = usePokeDetailsStore();
const { details, error } = storeToRefs(pokeDetailsStore)
onMounted(() => pokeDetailsStore.fetchPokeDetails(route.params.id))
</script>

<template>
  <div class="left-screen">
    <template v-if="details">
      <PokemonPicture :src="details.imageUrl" />
      <PokemonType :types="details.types" />
      <PokemonMessageScreen>
        <template v-if="!error">
          <h2>{{details.name}}...</h2>
          <PokemonAbout :about="details.about" />
        </template>
        <template v-else>
          <h2 class="text-danger">{{error}}...</h2>
        </template>
      </PokemonMessageScreen>
    </template>
  </div>

  <div class="right-screen">
    <div v-if="details.stats">
      <b>Stats:</b>
      <div class="stat-container">
        <PokemonStat 
          v-for="(stat, index) in details.stats" 
          :key="index" 
          :stat-name="stat.stat.name" 
          :base-stat="stat.base_stat" 
        />
      </div>
      
      <PokemonAbilities :abilities="details.abilities" />
      <PokemonEvolution :evolutions="details.evolutions" />
      <PokemonMoves :moves="details.moves" />
    </div>
  </div>

  <SearchPokemon @search="pokeDetailsStore.fetchPokeDetails" />
  <RouterLink  class="page-nav" :to="{path: '/'}"></RouterLink>

  
</template>
<style scoped>
.stat-container {
  display: flex;
  flex-wrap: wrap;
}
</style>