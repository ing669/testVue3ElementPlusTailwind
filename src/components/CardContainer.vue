<script setup>
import Card from './Card.vue';
const props = defineProps(['title', 'summary', 'productList']);
</script>

<template>
    <div> 
        <!-- 标题+描述 -->
         <div class="flex items-center">
            <img class="w-5 h-5" src="https://front.cdn.xdclass.net/images/icon_hot.webp" alt="">
            <span class="text-3 ml-1">{{ props.title }}</span>
            <div class="ml-10 flex items-center justify-center text-3 mr-9 pt-1">
                {{ props.summary }}
            </div>
         </div>
        <!-- 课程产品列表 -->
         <div class="flex items-center">
            <div class="flex mt-3 gap-5">
                <Card v-for="(item, index) in props.productList" :key="index" :card="item" />
            </div>
         </div>
    </div>
</template>

<style scoped>
</style>