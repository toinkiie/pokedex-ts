<script setup lang="ts">
 const props = defineProps(['pokemons'])
 const emit = defineEmits(['preview'])

 const preview = (id: number) => emit('preview', id)
</script>

<template>
  <ul v-if="props.pokemons">
    <li v-for="(pokemon, index) in props.pokemons" @click="preview(pokemon.id)" :key="pokemon.id">
      <span class="poke-id">{{pokemon.id}}</span>
      <img :src="pokemon.imageUrl" width="18" height="18" />
      <span class="poke-name">{{pokemon.name}}</span>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    position: relative;
    cursor: pointer;
    margin-bottom: 10px;
    text-align: left;
    border-radius: 40px;
    background-color: #fff;
  }
  .poke-name {
    text-transform: capitalize;
  }
  .poke-id {
    margin-right: 8px;
  }
  img {
    margin-right: 8px;
  }
</style>