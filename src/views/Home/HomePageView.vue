<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="min-h-screen bg-cover bg-center flex items-center justify-center"
        style="background-image: url('/img/house3.jpg')">
        <div
            class="relative bg-gradient-to-r from-secondary to-primary flex flex-col items-center justify-center gap-8 p-8 m-1 border-2 border-accent rounded-lg">
            <h1 class="text-5xl font-bold text-accent text-center">Welcome to Home Sphere</h1>
            <p class="text-xl text-white text-center max-w-2xl">
                Find your dream home, apartment, or villa across the USA.
            </p>

            <div class="flex flex-col text-center sm:flex-row gap-4 mt-6">
                <RouterLink to="/houses"
                    class="bg-accent hover:bg-accentHover text-white font-semibold py-4 px-8 rounded-lg transition">
                    Browse Houses
                </RouterLink>
                <RouterLink to="/apartments"
                    class="bg-accent hover:bg-accentHover text-white font-semibold py-4 px-8 rounded-lg transition">
                    Browse Apartments
                </RouterLink>
            </div>

            <RouterLink to="/about"
                class="mt-12 text-accent hover:text-accentHover transition-colors duration-300 text-lg">
                Learn more about us
            </RouterLink>
        </div>
    </div>
</template>
