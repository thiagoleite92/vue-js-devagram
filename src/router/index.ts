import { useAccessTokenStore } from './../stores/accessToken';
import HomeViewVue from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CadastroView from '@/views/CadastroView.vue';
import UsuarioView from '@/views/UsuarioView.vue';
import PerfilView from '@/views/PerfilView.vue';

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
      props: true,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView,
    },
    {
      path: '/usuario/:id',
      name: 'usuario',
      component: UsuarioView,
      meta: { rotaPrivada: true },
    },
    {
      path: '/perfil/:id',
      name: 'perfil',
      component: PerfilView,
      meta: { rotaPrivada: true },
    },
    {
      path: '/publicacao',
      name: 'publicacao',
      component: PerfilView,
      meta: { rotaPrivada: true },
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
