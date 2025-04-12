import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'template-users',
      component: () => import('@/modules/users/views/Layout.vue'),
      children: [
        {
          path: '/list',
          name: 'users-list',
          component: () => import('@/modules/users/views/UserList.vue'),
        },
        {
          path: '/form',
          name: 'users-form',
          component: () => import('@/modules/users/views/UserForm.vue'),
        },
      ],
    },
  ],
})

export default router
