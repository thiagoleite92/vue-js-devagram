<script lang="ts">
import { defineComponent } from 'vue';
import PostagemView from './PostagemView.vue';

export default defineComponent({
  props: {
    posts: Array,
  },
  components: { PostagemView },
});
</script>

<template>
  <div class="container-feed">
    <PostagemView :post="item" v-for="item in posts" />
  </div>
</template>

<!-- <style lang="scss" src="@/assets/styles/feed.scss" /> -->
