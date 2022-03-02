<script setup lang="ts">
 const props = defineProps(['abilities'])
</script>

<template>
  <div class="abilities-container">
    <b>Abilities:</b>
    <div class="abilities">
      {{props.abilities.join(', ')}}
    </div>
  </div>
</template>

<style scoped>
.abilities-container {
   margin: 20px 0 15px;
}
.abilities {
  margin-top: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
}

</style>