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
  <div>
    <img src="../assets/imagens/logo.svg" alt="Logo Devagram" />
    <form action="">
      <p v-if="erro">{{ erro }}</p>
      <div>
        <img src="../assets/imagens/envelope.svg" alt="Insira Login" />
        <input type="text" v-model="login" />
      </div>
      <div>
        <img src="../assets/imagens/key.svg" alt="Informe a Senha" />
        <input type="password" v-model="senha" />
      </div>
      <button @click.enter.prevent="efetuarLogin()">Login</button>
      <div>
        <p>Não possui uma conta?</p>
        <a href="">Faça seu cadastro agora!</a>
      </div>
    </form>
  </div>
</template>
