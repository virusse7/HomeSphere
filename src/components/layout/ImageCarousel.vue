<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

defineProps({
    images: {
        type: Array,
        required: true
    },
})
</script>

<template>
    <Swiper :modules="[Navigation, Pagination]" :slides-per-view="1" loop navigation pagination
        class="max-w-2xl mx-auto border-2 border-accent rounded-xl">
        <SwiperSlide class="w-full overflow-hidden" v-for="(img, index) in images" :key="index">
            <img :src="img" :alt="`Photo ${index + 1}`" class="w-full overflow-hidden aspect-[16/9] object-cover" />
        </SwiperSlide>
    </Swiper>
</template>