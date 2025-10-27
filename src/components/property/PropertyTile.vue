<script setup>
import { Phone, MapPin, Ruler, ShowerHead, BedDouble, CalendarDays, CircleDollarSign } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: Number,
    image: String,
    title: String,
    price: String,
    description: String,
    address: String,
    area: String,
    bedrooms: Number,
    bathrooms: Number,
    contact: String,
    yearBuilt: Number,
    features: Array,
    type: String,
})
</script>

<template>
    <RouterLink :to="`/${type}/${id}`"
        class="bg-backgroundTile border-accent border-4 shadow-lg hover:scale-[1.01] transition duration-300">
        <div>
            <img class="w-full" :src="image" :alt="title" />
            <div class="p-2 flex flex-col gap-2">
                <h2 class="text-2xl font-bold text-blue">{{ title }}</h2>
                <span class="bg-secondary h-[1px]"></span>
                <p>
                    {{ description }}
                </p>
                <p class="flex flex-row gap-1">
                    <map-pin class="w-6 h-6" />
                    {{ address }}
                </p>
                <p class="flex flex-row gap-1">
                    <ruler class="w-6 h-6" />
                    {{ area }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <p class="flex flex-row gap-1">
                        <calendar-days class="w-6 h-6" />
                        {{ yearBuilt }}
                    </p>
                    <p class="flex flex-row gap-1">
                        <shower-head class="w-6 h-6" />
                        {{ bathrooms }}
                    </p>
                    <p class="flex flex-row gap-1">
                        <bed-double class="w-6 h-6" />
                        {{ bedrooms }}
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 ">
                    <p class="flex flex-row gap-1">
                        <phone class="w-6 h-6" />
                        {{ contact }}
                    </p>
                    <p class="flex flex-row gap-1 items-center text-green text-lg font-semibold">
                        <circle-dollar-sign class="w-6 h-6" />
                        {{ price }}
                    </p>
                </div>
            </div>
        </div>
    </RouterLink>
</template>