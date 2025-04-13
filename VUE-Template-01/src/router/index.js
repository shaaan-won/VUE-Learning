import MainContent from '@/layouts/MainContent.vue';
import Dashboard from '@/pages/Dashboard.vue';
import FAQ from '@/pages/FAQ.vue';
import Login from '@/pages/LogInOut/Login.vue';
import NotFound from '@/pages/NotFound.vue';
import WardIndex from '@/pages/wards/index.vue';
import { createRouter, createWebHistory } from 'vue-router'



// const routes = [
//   { path: '/', component: Dashboard },
//   { path: '/faq', component: FAQ },
//   { path: '/:pathMatch(.*)*', component: NotFound },

//   { path: '/:wards', component: WardIndex  },
// ]
const routes = [
  { path: '/', component: Login },
  {
    path: '/',
    component: MainContent,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'faq', component: FAQ },
      { path: 'wards', component: WardIndex },
    ]
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// // Navigation guard
// router.beforeEach((to, from, next) => {
//   const auth = useAuthStore();
//   if (!to.meta.public && !auth.token) {
//     return next('/login');
//   }
//   next();
// });

export default router;