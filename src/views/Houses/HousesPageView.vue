<script setup>
import PropertyTile from '@/components/property/PropertyTile.vue';
import { onMounted, ref } from 'vue';

const housesData = ref([])

onMounted(async () => {
    try {
        const response = await fetch('/data/housesData.json')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        housesData.value = await response.json()
    } catch (e) {
        console.log('Error loading houses', e)
    }
})
console.log(housesData)
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 my-4">
        <PropertyTile v-for="house in housesData" :key="house.id" v-bind="house" type="houses" />
    </div>
</template>