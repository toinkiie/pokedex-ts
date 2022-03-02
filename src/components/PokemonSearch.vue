<script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  import { debounce } from 'vue-debounce'

  const term = ref<string>('');
  const emit = defineEmits(['search'])
  const search = debounce(e => emit('search', term.value), '600ms')
</script>

<template>
  <div class="search">
    <input type="text" @keydown="search" v-model="term" />
  </div>
</template>

<style scoped>
  .search {
    position: absolute;
    bottom: 0;
    top: 83px;
    left: 202px;
    height: 40px;
  }

  .search input {
    height: 40px;
    width: 170px;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>