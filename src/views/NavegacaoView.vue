<script lang="ts">
import { defineComponent } from 'vue';
import homeAtivo from '../assets/imagens/homeRoxo.svg';
import homeInativo from '../assets/imagens/homeRoxo.svg';
import userAtivo from '../assets/imagens/userRoxo.svg';
import userInativo from '../assets/imagens/userCinza.svg';
import postAtivo from '../assets/imagens/plus-squareRoxo.svg';
import postInativo from '../assets/imagens/plus-squareCinza.svg';
import router from '@/router';

export default defineComponent({
  methods: {
    efetuarNavegacao(name: string) {
      console.log('oi');

      const id = localStorage.getItem('_id') as string;

      if (name === 'perfil') {
        router.push({ name, params: { id } });
      }

      router.push({ name });
    },
    getIcone(name: string) {
      switch (name) {
        case 'home':
          if (router.currentRoute.value.name === 'home') {
            return homeAtivo;
          }
          return homeInativo;
        case 'publicacao':
          if (router.currentRoute.value.name === 'publicacao') {
            return postAtivo;
          }
          return postInativo;
        case 'perfil':
          if (router.currentRoute.value.name === 'perfil') {
            return userAtivo;
          }
          return userInativo;
        default:
          return '';
      }
    },
  },
});
</script>

<template>
  <nav class="container-navegacao">
    <ul>
      <li @click="efetuarNavegacao('home')">
        <img :src="getIcone('home')" alt="Home" class="iconeNav" />
      </li>
      <li @click="efetuarNavegacao('publicacao')">
        <img :src="getIcone('publicacao')" alt="Publicacao" class="iconeNav" />
      </li>
      <li @click="efetuarNavegacao('perfil')">
        <img :src="getIcone('perfil')" alt="Perfil" class="iconeNav" />
      </li>
    </ul>
  </nav>
</template>
