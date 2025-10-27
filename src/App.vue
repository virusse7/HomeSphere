<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
    <main class="flex flex-col min-h-screen">
        <Navbar />
        <RouterView class="flex-1" />
        <Footer />
    </main>
</template>
