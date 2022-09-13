<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      login: '',
      senha: '',
      loading: false,
      erro: '',
    };
  },

  methods: {
    efetuarLogin() {
      if (!this.login && !this.senha) {
        this.erro = 'Favor preencher o formulário';
        return;
      }

      alert('Login efetuado com sucesso!');
    },
  },
});
</script>

<template>
  <div class="container-publico">
    <img src="../assets/imagens/logo.svg" alt="Logo Devagram" class="logo" />
    <form action="">
      <p v-if="erro" class="error">{{ erro }}</p>
      <div class="input">
        <img src="../assets/imagens/envelope.svg" alt="Insira Login" />
        <input type="text" placeholder="Email" v-model="login" />
      </div>
      <div class="input">
        <img src="../assets/imagens/key.svg" alt="Informe a Senha" />
        <input type="password" placeholder="Senha" v-model="senha" />
      </div>
      <button @click.enter.prevent="efetuarLogin()">Login</button>
      <div class="link">
        <p>Não possui uma conta?</p>
        <a href="">Faça seu cadastro agora!</a>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
