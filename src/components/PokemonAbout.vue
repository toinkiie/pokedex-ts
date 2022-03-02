<script setup lang="ts">
 const props = defineProps(['about'])
</script>

<template>
  <div v-if="props.about">
    {{ props.about.join('') }}
  </div>
</template>