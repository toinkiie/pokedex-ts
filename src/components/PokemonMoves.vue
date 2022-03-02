<script setup lang="ts">
 const props = defineProps(['moves'])
</script>

<template>
  <div class="moves-container">
    <b>Moves:</b>
    <div class="moves">
      {{moves.join(', ')}}
    </div>
  </div>
</template>

<style scoped>
.moves-container {
   margin: 20px 0 15px;
}
.moves {
  margin-top: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
}
</style>