<script setup>
import PropertyTile from '@/components/property/PropertyTile.vue';
import { onMounted, ref } from 'vue';

const apartmentsData = ref([])

onMounted(async () => {
    try {
        const response = await fetch('/data/apartmentsData.json')
        if (!response.ok) {
            throw new Error(`HTTP error! ${response.status}`)
        }
        apartmentsData.value = await response.json()
    } catch (e) {
        console.log('Error loading apartments', e)
    }
})
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 my-4">
        <PropertyTile v-for="apartment in apartmentsData" :key="apartment.id" v-bind="apartment" type="apartments" />
    </div>
</template>