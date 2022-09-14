<script lang="ts">
import { defineComponent } from 'vue';

import { LoginServices } from '../services/LoginServices';
import InputPublico from '../components/InputPublico.vue';

import iconeLogin from '../assets/imagens/envelope.svg';
import iconeSenha from '../assets/imagens/key.svg';

const loginService = new LoginServices();

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
    async efetuarLogin() {
      try {
        if (
          !this.login &&
          !this.login.trim() &&
          !this.senha &&
          !this.senha.trim()
        ) {
          this.erro = 'Favor preencher o formulário';
          return;
        }
        this.loading = true;
        await loginService.login({ login: this.login, senha: this.senha });
      } catch (e: any) {
        console.log(e);
        if (e?.response?.data?.erro) {
          this.erro = e?.response?.data?.erro;
        } else {
          this.erro = 'Não foi possível realizar o login, tente novamente.';
        }
      }
      this.loading = false;
    },
    setLogin(v: any) {
      this.login = v;
    },
    setSenha(v: any) {
      this.senha = v;
    },
  },
  computed: {
    buttonText() {
      return this.loading ? '...Carregando' : 'Login';
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
      <button @click.enter.prevent="efetuarLogin" :disabled="loading">
        {{ buttonText }}
      </button>
      <div class="link">
        <p>Não possui uma conta?</p>
        <a href="">Faça seu cadastro agora!</a>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
