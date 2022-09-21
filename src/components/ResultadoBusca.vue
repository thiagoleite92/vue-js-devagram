<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import NavegacaoView from '../views/NavegacaoView.vue';
import Avatar from './Avatar.vue';

export default defineComponent({
  props: {
    nome: String,
    email: String,
    avatar: String,
    id: String,
  },
  methods: {
    irParaUsuario() {
      router.push('/usuario/' + this.id);
    },
  },
  components: { Avatar },
});
</script>

<template>
  <div @click="irParaUsuario" class="container-resultado">
    <Avatar :imagem="avatar" />
    <div class="info">
      <strong>{{ nome }}</strong>
      <span>{{ email }}</span>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/resultadoBusca.scss" />
