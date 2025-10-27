<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <section>
        <div class="flex flex-col justify-center items-center gap-4 py-4">
            <h2 class="text-4xl"> 404 Page not found</h2>
            <button class="text-xl bg-accent hover:bg-accentHover hover-transition py-4 px-8 rounded-full">
                <RouterLink to="/" class="text-primary ">Go to home
                </RouterLink>
            </button>
        </div>
    </section>
</template>