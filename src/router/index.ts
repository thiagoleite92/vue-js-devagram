import { useAccessTokenStore } from './../stores/accessToken';
import HomeViewVue from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CadastroView from '@/views/CadastroView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
      meta: { rotaPrivada: true },
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView,
    },
  ],
});

router.beforeEach((to, from) => {
  const store = useAccessTokenStore();
  if (to.name !== 'login' && to.meta.rotaPrivada && !store.estaAutenticado) {
    return { name: 'login' };
  } else if (to.name === 'cadastro' && store.estaAutenticado) {
    return { name: 'home' };
  }
});

export default router;
