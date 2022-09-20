<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { FeedServices } from '../services/FeedServices';
import FeedView from './FeedView.vue';

const feedServices = new FeedServices();

export default defineComponent({
  components: { Header, Footer, FeedView },
  data() {
    return {
      posts: [],
    };
  },

  async mounted() {
    try {
      const result = await feedServices.getFeedPrincipal();

      if (result && result.data) {
        this.posts = result.data;
      }
    } catch (e) {
      console.log(e);
    }
  },
});
</script>

<template>
  <Header />
  <FeedView :posts="posts" />
  <Footer />
</template>
