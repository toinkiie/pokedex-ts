<script setup lang="ts">
 const props = defineProps(['evolutions'])
</script>

<template>
  <div class="evolution-container">
    <b>Evolution:</b>
    <div class="evolution">
      {{ props.evolutions.join(' > ')}}
    </div>
  </div>
</template>

<style scoped>
.evolution-container {
  margin-top: 20px;
}

.evolution {
  margin-top: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
}
</style>