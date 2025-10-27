<script setup>
import logo from '@/assets/img/logo.jpg'
</script>

<template>
    <footer
        class="w-full flex flex-col sm:flex-row gap-8 text-center items-center sm:justify-between bg-gradient-to-r from-secondary to-primary py-6 px-6">
        <div class="text-accent text-xl flex gap-2 flex-col items-center sm:items-start">
            <RouterLink to="/">
                <p class="text-accent hover:text-accentHover text-center duration-300">Home Sphere</p>
            </RouterLink>
            <RouterLink to="/">
                <img class="w-20 h-20 rounded-full min-w-[80px]" :src="logo" alt="logo" />
            </RouterLink>
        </div>
        <ul class="grid grid-cols-1 sm:grid-cols-3 text-center text-accent transition-colors text-xl gap-6">
            <li class="hover:text-accentHover duration-300">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <div class="flex flex-col gap-6 border-accent">
                <li class="hover:text-accentHover duration-300">
                    <RouterLink to="/apartments">Apartments</RouterLink>
                </li>
                <li class="hover:text-accentHover duration-300">
                    <RouterLink to="/houses">Houses</RouterLink>
                </li>
            </div>
            <li class="hover:text-accentHover duration-300">
                <RouterLink to="/about">About</RouterLink>
            </li>
        </ul>
    </footer>
</template>