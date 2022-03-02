<script setup lang="ts">
 const emit = defineEmits(['prevList'])
 const prevList = () => emit('prevList')
</script>

<template>
  <div class="prev-list">
    <button @click="prevList">&lt; PREV</button>
  </div>
</template>

<style scoped>
.prev-list {
  position: absolute;
  bottom: 33px;
  bottom: 28px;
  right: 226px;
}
</style>