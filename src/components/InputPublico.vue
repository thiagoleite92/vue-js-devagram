<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    icone: String,
    alt: String,
    tipo: String,
    placeholder: String,
    modelValue: String,
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(v: any) {
        this.$emit('setInput', v);
      },
    },
  },
});
</script>

<template>
  <div class="container-input-customizado">
    <img :src="icone" :alt="alt" />
    <input :type="tipo" :placeholder="placeholder" v-model="model" />
  </div>
</template>

<style lang="scss" src="@/assets/styles/inputPublico.scss" />
