import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../service/firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import('../views/app/App.vue')
    },
    {
      path: '/@:name',
      name: 'profile',
      component: () => import('../views/app/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/newMatch',
      name: 'newMatch',
      component: () => import('../views/app/NewMatch.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/match',
      name: 'match',
      component: () => import('../views/app/Match.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const user = auth.currentUser

  if (requiresAuth && !user) next('/')
  else if (requiresAuth && user) next()
  else next()
})

export default router
