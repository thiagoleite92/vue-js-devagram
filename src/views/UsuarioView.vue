<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { FeedServices } from '../services/FeedServices';
import FeedView from './FeedView.vue';
import router from '@/router';

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
      if (!this.$route.params?.id) {
        return router.push({ name: 'home' });
      }

      const id = this.$route.params?.id as string;

      const result = await feedServices.getFeedPorId(id);

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
