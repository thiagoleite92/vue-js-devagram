<script lang="ts">
import { defineComponent } from 'vue';
import InputPublico from '../components/InputPublico.vue';

import iconeLogin from '../assets/imagens/envelope.svg';
import iconeSenha from '../assets/imagens/key.svg';

export default defineComponent({
  setup() {
    return {
      iconeLogin,
      iconeSenha,
    };
  },
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
    setLogin(v: any) {
      this.login = v;
    },
    setSenha(v: any) {
      this.senha = v;
    },
  },
  components: { InputPublico },
});
</script>

<template>
  <div class="container-publico">
    <img src="../assets/imagens/logo.svg" alt="Logo Devagram" class="logo" />
    <form action="">
      <p v-if="erro" class="error">{{ erro }}</p>

      <InputPublico
        :icone="iconeLogin"
        alt="Insira o Login"
        placeholder="Email"
        tipo="text"
        :modelValue="login"
        @setInput="setLogin"
      />

      <InputPublico
        :icone="iconeSenha"
        alt="Insira a Senha"
        placeholder="Senha"
        tipo="password"
        :modelValue="senha"
        @setInput="setSenha"
      />
      <button @click.enter.prevent="efetuarLogin()">Login</button>
      <div class="link">
        <p>Não possui uma conta?</p>
        <a href="">Faça seu cadastro agora!</a>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
