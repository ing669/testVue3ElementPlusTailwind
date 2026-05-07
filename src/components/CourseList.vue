<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CardContainer from './CardContainer.vue';

const data = ref("");

onMounted(async () => {
    try {
        const response = await axios.get('https://api-v2.xdclass.net/api/card/v1/list');
        console.log(response);
        data.value = response.data.data; // 将请求的数据赋值给 cards
        console.log(data);
    } catch (err) {
        console.error(err); // 打印信息到控制台
    }
})
</script>

<template>
  <div class=" flex flex-col gap-8 mt-10">
    <CardContainer
        v-for="(item, index) in data"
        :key="index"
        :title="item.name"
        :summay="item.summar"
        :productList="item.productList.slice(0, 4)"
    />
  </div>
</template>

<style scoped>
</style>