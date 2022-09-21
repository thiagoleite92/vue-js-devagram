<script lang="ts">
import { defineComponent } from 'vue';
import NavegacaoView from '../views/NavegacaoView.vue';
import { UsuarioServices } from '../services/UsuarioServices';
import ResultadoBusca from './ResultadoBusca.vue';

const usuarioServices = new UsuarioServices();

export default defineComponent({
  data() {
    return {
      resultado: [] as any,
      pesquisa: '',
    };
  },
  methods: {
    async buscarUsuarios(e: any) {
      console.log(e);
      try {
        if (!e?.target?.value) {
          this.resultado = [];
          this.pesquisa = '';
          return;
        }

        this.pesquisa = e?.target?.value;

        console.log(this.pesquisa);

        if (!this.pesquisa || this.pesquisa.trim().length < 2) {
          return;
        }

        const response = await usuarioServices.pesquisar(this.pesquisa);

        if (response && response.data) {
          this.resultado = response.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: { NavegacaoView, ResultadoBusca },
});
</script>

<template>
  <header class="container-header">
    <div class="principal">
      <img src="../assets/imagens/logoHorizontal.svg" alt="Logo Devagram" />
      <div class="group">
        <div class="pesquisa">
          <img src="../assets/imagens/search.svg" class="icon" />
          <input
            type="text"
            placeholder="Pesquisar"
            v-model="pesquisa"
            @input="buscarUsuarios"
          />
        </div>
      </div>
      <NavegacaoView />
    </div>

    <div class="resultado" v-if="resultado.length > 0">
      <ResultadoBusca
        v-for="user in resultado"
        :key="user._id"
        :id="user._id"
        :nome="user.nome"
        :avatar="user.avatar"
        :email="user.email"
      />
    </div>
  </header>
</template>

<style lang="scss" src="@/assets/styles/header.scss" />
