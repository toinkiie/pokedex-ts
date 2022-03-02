<script setup lang="ts">
  import { onMounted } from 'vue'
  import { usePokeListStore } from '@/stores/pokeListStore'
  import { storeToRefs } from 'pinia';
  import { RouterLink } from 'vue-router'
  import PokemonPicture from '../components/PokemonPicture.vue';
  import PokemonSearch from '@/components/PokemonSearch.vue'
  import PokemonList from '@/components/PokemonList.vue'
  import PokemonListNext from '@/components/PokemonListNext.vue'
  import PokemonListPrev from '@/components/PokemonListPrev.vue'
  import PokemonMessageScreen from '@/components/PokemonMessage.vue'

  const pokeListStore = usePokeListStore()
  const { pokeList, previous, next , preview, error } = storeToRefs(pokeListStore)

  onMounted(async () => pokeListStore.initializePokeList());
</script>

<template>

  <div class="left-screen">
    <template v-if="preview">
      <PokemonPicture v-if="preview.imageUrl" :src="preview?.imageUrl" />
      <PokemonMessageScreen>
        <h2 v-bind:class="{'text-danger': error }">
        {{ error? error : preview?.name}}...
        </h2>

      </PokemonMessageScreen>
    </template>
  </div>
  <div class="right-screen">
    <PokemonList @preview="pokeListStore.setPokemonPreview" :pokemons="pokeList" />
  </div>

  <PokemonSearch @search="pokeListStore.searchPokemon" />
  <PokemonListNext v-if="next" @next-list="pokeListStore.fetchNextResource" />
  <PokemonListPrev v-if="previous" @prev-list="pokeListStore.fetchPreviousResource" />
  <RouterLink  class="page-nav" :to="{path: `/pokemon/${preview.id}`}"></RouterLink>
  
</template>

<style scoped>
  img {
    margin-left: 10px;
    max-width: 200px;
    margin: 20px auto 0;
    display: block;
  }

  .error {
    
  }


</style>
