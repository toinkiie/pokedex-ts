<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="pokedex">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

* {
  box-sizing: border-box;
}
.pokedex {
  background: url('@/assets/pokedex-bg.png');
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  width: 800px;
  height: 600px;
  z-index: 100;
}

.left-screen {
  position: fixed;
  left: 30px;
  top: 152px;
  width: 330px;
  height: 335px;
}

.right-screen {
  position: fixed;
  right: 37px;
  top: 159px;
  width: 298px;
  height: 373px;
  padding: 15px;
  overflow-y: auto;
  border-radius: 12px;
}
</style>
