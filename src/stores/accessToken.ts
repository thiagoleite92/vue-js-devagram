import { defineStore } from 'pinia';

export const useAccessTokenStore = defineStore({
  id: 'acessToken',
  state: () => ({
    token: localStorage.getItem('token'),
  }),
  getters: {
    estaAutenticado: (state) =>
      state.token !== null && state.token.trim() !== '',
  },
  actions: {
    setToken(t: string) {
      this.token = t;
    },
  },
});
