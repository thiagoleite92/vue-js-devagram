<script lang="ts">
import { defineComponent } from 'vue';
import NavegacaoView from '../views/NavegacaoView.vue';

export default defineComponent({ components: { NavegacaoView } });
</script>

<template>
  <footer class="container-footer">
    <NavegacaoView />
  </footer>
</template>

<style lang="scss" src="@/assets/styles/footer.scss" />
