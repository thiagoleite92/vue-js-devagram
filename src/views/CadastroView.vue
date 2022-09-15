<script lang="ts">
import { defineComponent } from 'vue';

import InputPublico from '../components/InputPublico.vue';

import iconeLogin from '../assets/imagens/envelope.svg';
import iconeSenha from '../assets/imagens/key.svg';
import iconeUsuario from '../assets/imagens/usuario.svg';
import iconeAvatar from '../assets/imagens/avatar.svg';
import iconeCamera from '../assets/imagens/camera.svg';

export default defineComponent({
  setup() {
    return {
      iconeLogin,
      iconeSenha,
      iconeUsuario,
      iconeAvatar,
      iconeCamera,
    };
  },
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      confirmacao: '',
      loading: false,
      erro: '',
    };
  },
  methods: {
    async cadastrar() {
      try {
      } catch (e: any) {
        console.log(e);
        if (e?.response?.data?.erro) {
          this.erro = e?.response?.data?.erro;
        } else {
          this.erro = 'Não foi possível cadastrar usuário, tente novamente.';
        }
      }
      this.loading = false;
    },
    setNome(v: any) {
      this.nome = v;
    },
    setEmail(v: any) {
      this.email = v;
    },
    setSenha(v: any) {
      this.senha = v;
    },
    setConfirmacao(v: any) {
      this.confirmacao = v;
    },
  },
  computed: {
    buttonText() {
      return this.loading ? '...Carregando' : 'Cadastrar';
    },
  },
  components: { InputPublico },
});
</script>

<template>
  <div class="container-publico">
    <img src="../assets/imagens/logo.svg" alt="Logo Devagram" class="logo" />
    <form action="">
      <div>
        <div>
          <img :src="iconeAvatar" alt="Foto do Usuário" />
        </div>

        <input type="file" accept="image/*" />
      </div>
      <p v-if="erro" class="error">{{ erro }}</p>

      <InputPublico
        :icone="iconeUsuario"
        alt="Icone Usuário"
        placeholder="Nome Completo"
        tipo="text"
        :modelValue="nome"
        @setInput="setNome"
      />

      <InputPublico
        :icone="iconeLogin"
        alt="Insira o Email"
        placeholder="Email"
        tipo="text"
        :modelValue="email"
        @setInput="setEmail"
      />

      <InputPublico
        :icone="iconeSenha"
        alt="Insira a Senha"
        placeholder="Senha"
        tipo="password"
        :modelValue="senha"
        @setInput="setSenha"
      />

      <InputPublico
        :icone="iconeSenha"
        alt="Confirme sua Senha"
        placeholder="Confirmacao de Senha"
        tipo="password"
        :modelValue="confirmacao"
        @setInput="setConfirmacao"
      />
      <button @click.enter.prevent="cadastrar" :disabled="loading">
        {{ buttonText }}
      </button>
      <div class="link">
        <p>Já possui uma conta?</p>
        <RouterLink :to="{ name: 'login' }">Faça Login agora!</RouterLink>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="@/assets/styles/paginaPublica.scss" />
