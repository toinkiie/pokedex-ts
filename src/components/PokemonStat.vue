<script setup lang="ts">
 const props = defineProps(['baseStat', 'statName'])
</script>

<template>
  <div class="card-stat">
    <h3>{{ props.baseStat }}</h3>
    <b>{{ props.statName }}</b>
  </div>
</template>

<style scoped>
  .card-stat {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-width: 33.33%;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  b {
    font-size: 1rem;
    display: block;
  }
</style>