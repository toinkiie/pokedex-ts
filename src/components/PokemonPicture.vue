<script setup lang="ts">
 const props = defineProps(['src'])
</script>

<template>
  <img :src="props.src" class="pokemon-picture" />
</template>

<style scoped>
  img {
    margin-left: 10px;
    max-width: 200px;
    margin: 20px auto 0;
    display: block;
  }
</style>