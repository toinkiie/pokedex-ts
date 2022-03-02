<script setup lang="ts">
</script>

<template>
  <div class="message-screen">
    <slot></slot>
  </div>
</template>

<style scoped>
  .message-screen {
    position: absolute;
    bottom: 0;
    height: 115px;
    width: 100%;
    text-transform: capitalize;
    background-color: #FFFFCC;
    border-top: 3px solid #000;
    padding: 10px;
    overflow-y: auto;
  }
</style>