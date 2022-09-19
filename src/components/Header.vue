<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      resultado: [],
    };
  },
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

        <!-- Navegacao -->
      </div>
    </div>

    <div class="resultado" v-if="resultado.length > 0">
      <!-- resultado busca -->
    </div>
  </header>
</template>

<style lang="scss" src="@/assets/styles/header.scss" />
