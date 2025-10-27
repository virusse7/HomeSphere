<script setup>
import logo from '@/assets/img/logo.jpg'
import { Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false)
</script>

<template>

    <nav class="bg-gradient-to-r from-secondary to-primary w-full flex justify-between items-center gap-8 px-6 py-6">
        <div class="flex items-center justify-center gap-4">
            <RouterLink to="/">
                <img class="w-20 h-20 rounded-full min-w-[80px]" :src="logo" alt="logo" />
            </RouterLink>
            <RouterLink to="/">
                <h2 class="text-accent hover:text-accentHover duration-300 text-3xl hidden sm:block">Home Sphere</h2>
            </RouterLink>
        </div>
        <ul class="hidden text-accent  transition-colors text-xl md:flex items-center justify-center gap-6">
            <li class="hover:text-accentHover duration-300">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="hover:text-accentHover duration-300">
                <RouterLink to="/apartments">Apartments</RouterLink>
            </li>
            <li class="hover:text-accentHover duration-300">
                <RouterLink to="/houses">Houses</RouterLink>
            </li>
            <li class="hover:text-accentHover duration-300">
                <RouterLink to="/about">About</RouterLink>
            </li>
        </ul>

        <button @click="isOpen = !isOpen" class="md:hidden">
            <Menu v-if="!isOpen" size="32px" class="text-accent" />
            <X size="32" v-else class="text-accent" />
        </button>



        <ul v-if="isOpen"
            class="text-accent  transition-colors text-xl flex flex-col items-center justify-center  gap-16 text-center md:hidden absolute w-full  z-10 overflow-hidden top-28 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-primary p-10">
            <li @click="isOpen = false" class="hover:text-accentHover duration-300">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li @click="isOpen = false" class="hover:text-accentHover duration-300">
                <RouterLink to="/apartments">Apartments</RouterLink>
            </li>
            <li @click="isOpen = false" class="hover:text-accentHover duration-300">
                <RouterLink to="/houses">Houses</RouterLink>
            </li>
            <li @click="isOpen = false" class="hover:text-accentHover duration-300">
                <RouterLink to="/about">About</RouterLink>
            </li>
        </ul>

    </nav>
</template>