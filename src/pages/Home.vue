<script setup>
import { useUserStore } from '../store/User';
const userStore = useUserStore();
</script>

<template>
  <div>{{ userStore.token }}</div>
</template>

<style scoped>
</style>