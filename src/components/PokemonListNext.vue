<script setup lang="ts">
 const emit = defineEmits(['nextList'])
 const nextList = () => emit('nextList')
</script>

<template>
  <div class="next-list">
    <button @click="nextList">NEXT ></button>
  </div>
</template>

<style scoped>
.next-list {
  position: absolute;
  bottom: 33px;
  bottom: 28px;
  right: 58px;
}
</style>