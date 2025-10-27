<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { VueSpinner } from 'vue3-spinners'
import { MapPin, ArrowLeft, CircleDollarSign, Phone } from 'lucide-vue-next';
import Tile from '@/components/property/Tile.vue';
import ImageCarousel from '@/components/layout/ImageCarousel.vue';


const route = useRoute()
const loading = ref(true)
const house = ref(null)

onMounted(async () => {
    try {
        const response = await fetch('/data/housesData.json')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()

        const houseId = Number(route.params.id)

        await new Promise(resolve => setTimeout(resolve, 500))
        house.value = data.find(item => item.id === houseId)

        if (!house.value) {
            console.warn(`House with this ${houseId}ID not found`)
        }

    } catch (e) {
        console.error('Error fetching house data', e)
    } finally {
        loading.value = false
    }

})

const form = ref({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
})

const messageSent = ref(false)

const sendMessage = () => {
    console.log("Form submitted", {
        name: form.value.name,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber,
        message: form.value.message
    })

    messageSent.value = true
    setTimeout(() => {
        messageSent.value = false
    }, 3000)

    form.value = {
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    }
}



</script>

<template>
    <div v-if="loading" class="text-3xl my-8 mx-auto">
        <div class="flex flex-col justify-center items-center text-center gap-8">
            <VueSpinner size="60" color="#B4952F" />
            <p>Loading information about house...</p>
        </div>
    </div>

    <div v-else-if="house" class="mx-1 lg:w-4/5 lg:mx-auto my-4">
        <div class="flex flex-col gap-4">
            <RouterLink to="/houses">
                <button
                    class="flex flex-row gap-1 items-center text-secondary text-sm hover:text-accentHover transition-colors duration-300">
                    <ArrowLeft />
                    Go back
                </button>
            </RouterLink>
            <div class="md:mx-auto overflow-hidden">
                <ImageCarousel :images="house.images" />
            </div>
            <div class="md:grid md:grid-cols-[2fr,1fr] flex flex-col gap-2">
                <div class="flex flex-col gap-4">
                    <Tile class="flex flex-col gap-1">
                        <div class="flex flex-col md:flex-row justify-between">
                            <h2 class="text-4xl pb-1 ">{{ house.title }}</h2>
                            <span :class="house.available ? 'text-green font-bold' : 'text-red-600 font-bold'">
                                {{ house.available ? "Avaiable" : "Sold" }}
                            </span>
                        </div>
                        <div class="flex flex-row gap-1 items-center text-green text-lg font-semibold">
                            <CircleDollarSign />
                            <p class="">{{ house.price }}</p>
                        </div>
                        <div class="flex flex-row gap-1">
                            <MapPin class="" />
                            <p>{{ house.address }}</p>
                        </div>
                    </Tile>
                    <Tile>
                        <p class="text-2xl font-semibold mb-1">Information about house:</p>
                        <ul class="p-1 flex flex-col gap-1">
                            <li>Area: {{ house.area }}</li>
                            <p class="h-[1px] bg-accent" />
                            <li>Bedrooms: {{ house.bedrooms }}</li>
                            <p class="h-[1px] bg-accent" />
                            <li>Bathrooms: {{ house.bathrooms }}</li>
                            <p class="h-[1px] bg-accent" />
                            <li v-for="(feature, index) in house.features" :key="index">
                                {{ feature }}
                                <p class="h-[1px] bg-accent" />
                            </li>
                            <li>Year built: {{ house.yearBuilt }}</li>
                        </ul>
                    </Tile>
                    <Tile>
                        <p class="text-2xl font-semibold mb-1">Description</p>
                        <p>{{ house.longDescription }}</p>
                    </Tile>
                    <Tile>
                        <p class="text-2xl font-semibold mb-1">Map</p>
                        <iframe class="w-full h-96 rounded-md"
                            :src="`https://www.google.com/maps?q=${encodeURIComponent(house.address)}&output=embed`"
                            allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </Tile>
                </div>

                <Tile class="flex flex-col gap-2 h-min">
                    <div class="flex flex-row justify-between items-center">
                        <p class="font-bold text-xl">{{ house.ownerName }}</p>
                        <div class="flex flex-row items-center gap-1">
                            <Phone class="w-4 h-4" />
                            <p>{{ house.contact }}</p>
                        </div>
                    </div>
                    <p class="h-[1px] bg-accent" />
                    <form @submit.prevent="sendMessage" class="flex flex-col gap-2">
                        <input required v-model="form.name" type="text" placeholder="Name" maxlength="90"
                            class="border-2 border-accent rounded-md p-1" />
                        <input required v-model="form.email" type="email" placeholder="Email" maxlength="90"
                            class="border-2 border-accent rounded-md p-1" />
                        <input required v-model="form.phoneNumber" type="tel" maxlength="15"
                            @input="form.phoneNumber = form.phoneNumber.replace(/\D/g, '')" placeholder="Phone number"
                            class="border-2 border-accent rounded-md p-1" />
                        <textarea required v-model="form.message" placeholder="Your message" maxlength="500" rows="5"
                            class="border-2 border-accent rounded-md p-1 resize-none" />

                        <button type="submit"
                            class="bg-accentHover hover:bg-accent transition-colors duration-300 rounded-full w-1/2 p-2 mx-auto">
                            Send message
                        </button>

                        <div v-if="messageSent"
                            class="fixed top-20 left-1/2 transform -translate-x-1/2 p-4 text-center shadow-lg border-2 border-accent bg-gradient-to-r from-secondary to-primary text-white rounded-lg">
                            Your message has been sent!
                        </div>
                    </form>
                </Tile>
            </div>
        </div>
    </div>

    <div v-else class="my-8 flex flex-col items-center justify-center gap-6">
        <p class="text-3xl text-secondary">
            Property not found
        </p>
        <RouterLink to="/" class="text-primary ">
            <button class="text-xl bg-accent hover:bg-accentHover hover-transition py-4 px-8 rounded-full">
                Go to home
            </button>
        </RouterLink>
    </div>
</template>