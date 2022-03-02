<script setup lang="ts">
 const props = defineProps(['types'])
</script>

<template>
  <div class="type">
    <b>Type: {{ props.types?.join('/') }}</b>
  </div>
</template>

<style scoped>
  .type {
    background: #FFFFCC;
    padding: 6px;
    position: absolute;
    top: 201px;
    right: 0px;
  }
</style>