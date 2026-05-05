<script setup>
import { useUserStore } from '../store/User';
const userStore = useUserStore();
</script>

<template>
    <div class="text-xs text-red-500"> Hello, World! </div>
    <div class="text-xs text-red-500"> {{ userStore.token }} </div>
    <el-button type="primary"><el-icon><CirclePlus /></el-icon>添加</el-button>
</template>

<style scoped>
</style>