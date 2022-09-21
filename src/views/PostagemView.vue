<script lang="ts">
import { defineComponent } from 'vue';
import Avatar from '../components/Avatar.vue';

import likeRoxo from '../assets/imagens/likeRoxo.svg';
import likeCinza from '../assets/imagens/likeCinza.svg';
import comentarRoxo from '../assets/imagens/comentarRoxo.svg';
import comentarCinza from '../assets/imagens/comentarCinza.svg';
import { FeedServices } from '@/services/FeedServices';

const feedServices = new FeedServices();

const MAX_DESCRICAO = 90;

export default defineComponent({
  setup() {
    return {
      likeRoxo: String,
      curtirCinza: String,
      comentarRoxo: String,
      comentarCiza: String,
      loggedUserId: localStorage.getItem('_id'),
      loggedAvatar: localStorage.getItem('avatar') ?? '',
      loggedName: localStorage.getItem('nome') ?? '',
      MAX_DESCRICAO,
    };
  },
  props: {
    post: null,
  },
  data() {
    return {
      showComentario: false,
      comentarioMsg: '',
      showDescricaoFull: false,
    };
  },
  methods: {
    navegarParaPerfil() {},
    async toogleCurtir() {
      try {
        await feedServices.toggleCurtir(this.post?._id);

        const index = this.post?.likes?.findIndex(
          (e: string) => e === this.loggedUserId
        );

        if (index != -1) {
          this.post?.likes?.splice(index, 1);
        } else {
          this.post?.likes?.push(this.loggedUserId);
        }
      } catch (e) {
        console.log(e);
      }
    },
    toggleComentario() {
      this.showComentario = !this.showComentario;
    },
    async enviarComentario() {
      try {
        if (!this.comentarioMsg || !this.comentarioMsg.trim()) {
          return;
        }

        await feedServices.enviarComentario(this.post?._id, this.comentarioMsg);

        this.post?.comentarios?.push({
          usuarioId: this.loggedUserId,
          nome: this.loggedName,
          comentario: this.comentarioMsg,
        });

        this.comentarioMsg = '';
        this.showComentario = false;
      } catch (e) {
        console.log(e);
      }
    },
    toggleDescricaoFull() {
      this.showDescricaoFull = true;
    },
  },
  computed: {
    obterIconeCurtir() {
      return this.post?.likes &&
        this.post?.likes.findIndex((e: String) => e === this.loggedUserId) != -1
        ? likeRoxo
        : likeCinza;
    },
    obterIconeComentario() {
      return this.showComentario ? comentarRoxo : comentarCinza;
    },
    exibirDescricao() {
      if (this.showDescricaoFull) {
        return this.post?.descricao;
      }

      return this.post?.descricao?.length > MAX_DESCRICAO
        ? this.post?.descricao.substring(0, MAX_DESCRICAO)
        : this.post?.descricao;
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
        <img
          alt="Icone Curtir"
          :src="obterIconeCurtir"
          class="feedIcone"
          @click="toogleCurtir"
        />
        <img
          alt="Icone Comentario"
          :src="obterIconeComentario"
          class="feedIcone"
          @click="toggleComentario"
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
          {{ exibirDescricao }}
          <span
            v-if="post?.descricao.length > MAX_DESCRICAO && !showDescricaoFull"
            @click="toggleDescricaoFull"
            class="mais"
          >
            mais...
          </span>
        </p>
      </div>

      <div class="comentarios">
        <div v-for="(comentario, index) in post?.comentarios" :key="index">
          <strong>{{ comentario.nome }}</strong>
          <p>{{ comentario.comentario }}</p>
        </div>
      </div>
    </div>

    <div class="container-comentario" v-if="showComentario">
      <Avatar alt="Minha foto" :imagem="loggedAvatar" />
      <input
        type="text"
        placeholder="Adicione um comentário..."
        @keyup.enter="enviarComentario"
        v-model="comentarioMsg"
      />
      <button type="button" @click="enviarComentario">Publicar</button>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/postagem.scss" />
