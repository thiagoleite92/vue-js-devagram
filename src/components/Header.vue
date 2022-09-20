<script lang="ts">
import { defineComponent } from 'vue';
import NavegacaoView from '../views/NavegacaoView.vue';

export default defineComponent({
  data() {
    return {
      resultado: [],
    };
  },
  components: { NavegacaoView },
});
</script>

<template>
  <header class="container-header">
    <div class="principal">
      <img src="../assets/imagens/logoHorizontal.svg" alt="Logo Devagram" />
      <div class="group">
        <div class="pesquisa">
          <img src="../assets/imagens/search.svg" class="icon" />
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>
      <NavegacaoView />
    </div>

    <div class="resultado" v-if="resultado.length > 0">
      <!-- resultado busca -->
    </div>
  </header>
</template>

<style lang="scss" src="@/assets/styles/header.scss" />
