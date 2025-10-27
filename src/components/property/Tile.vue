<script setup>
defineProps({
    className: {
        type: String,
        default: ''
    }
})

</script>

<template>
    <div :class="`text-secondary border-2 border-accent bg-backgroundWhite shadow-md rounded-md p-2 ${className}`">
        <slot />
    </div>
</template>