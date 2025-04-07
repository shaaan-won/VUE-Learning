import Dashboard from '@/pages/Dashboard.vue';
import FAQ from '@/pages/FAQ.vue';
import NotFound from '@/pages/NotFound.vue';
import WardIndex from '@/pages/wards/index.vue';
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  { path: '/', component: Dashboard },
  { path: '/faq', component: FAQ },
  { path: '/:pathMatch(.*)*', component: NotFound },

  { path: '/:wards', component: WardIndex  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;