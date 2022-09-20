<script lang="ts">
import { defineComponent } from 'vue';
import Avatar from '../components/Avatar.vue';

import likeRoxo from '../assets/imagens/likeRoxo.svg';
import likeCinza from '../assets/imagens/likeCinza.svg';
import comentarRoxo from '../assets/imagens/comentarRoxo.svg';
import comentarCinza from '../assets/imagens/comentarCinza.svg';

export default defineComponent({
  setup() {
    return {
      likeRoxo: String,
      curtirCinza: String,
      comentarRoxo: String,
      comentarCiza: String,
      loggedUserId: localStorage.getItem('_id'),
    };
  },
  props: {
    post: null,
  },
  methods: {
    navegarParaPerfil() {},
  },
  computed: {
    obterIconeCurtir() {
      return this.post?.likes &&
        this.post?.likes.findIndex((e: String) => e === this.loggedUserId) != -1
        ? likeRoxo
        : likeCinza;
    },
  },
  components: { Avatar },
});
</script>

<template>
  <div class="container-postagem">
    <div @click="navegarParaPerfil()">
      <section class="cabecalho">
        <Avatar :imagem="post?.usuario?.avatar" />
        <strong>{{ post?.usuario?.nome }}</strong>
      </section>
    </div>

    <div class="foto">
      <img :src="post?.foto" alt="Imagem da publicação" />
    </div>

    <div class="rodape">
      <div class="acoes">
        <img alt="Icone Curtir" :src="obterIconeCurtir" class="feedIcone" />
        <img
          alt="Icone Comentario"
          src="../assets/imagens/comentarCinza.svg"
          class="feedIcone"
        />
        <span class="curtidas"
          >Curtido por
          <strong
            >{{ post?.likes?.length }}
            pessoa
            {{ post?.likes?.length > 1 ? 's' : '' }}
          </strong>
        </span>
      </div>

      <div class="descricao">
        <strong>{{ post?.usuario?.nome }}</strong>
        <p>
          {{ post?.descricao }}
        </p>
      </div>

      <div class="comentarios">
        <div v-for="(comentario, index) in post?.comentarios" :key="index">
          <strong>{{ comentario.nome }}</strong>
          <p>{{ comentario.comentario }}</p>
        </div>
      </div>
    </div>

    <div class="container-comentario">
      <!-- implementar comentario -->
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/postagem.scss" />
