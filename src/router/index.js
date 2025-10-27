import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/Home/HomePageView.vue'
import ApartmentsPageView from '@/views/Apartments/ApartmentsPageView.vue'
import HousesPageView from '@/views/Houses/HousesPageView.vue'
import NotFoundPageView from '@/views/Other/NotFoundPageView.vue'
import AboutPageView from '@/views/Other/AboutPageView.vue'
import HouseDetailsView from '@/views/Houses/HouseDetailsView.vue'
import ApartmentDetailsView from '@/views/Apartments/ApartmentDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView,
    },
    {
      path: '/apartments',
      name: 'apartments',
      component: ApartmentsPageView,
    },
    {
        path: '/apartments/:id',
        name: 'apartment details',
        component: ApartmentDetailsView,
    },
    {
        path: '/houses',
        name: 'houses',
        component: HousesPageView,
    },
    {
        path: '/houses/:id',
        name: 'house details',
        component: HouseDetailsView,
        props: true,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPageView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPageView
    },
  ],
})

export default router
