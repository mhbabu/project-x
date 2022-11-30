import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      count: 0,
      token: null,
      user: {},
    };
  },

  mutations: {
    addToken(state, payload) {
      state.token = payload;
    },

    clearToken(state) {
      state.token = '';
    },

    increment() {
      this.state.count++;
    },

    decrement() {
      if (this.state.count > 0) this.state.count--;
    },
  },

  actions: {
    updateToken(context, payload) {
      context.commit("addToken", payload);
    },

    logout(context) {
      context.commit("clearToken");
    },

    increment() {
      this.state.count++;
    },

    decrement() {
      if (this.state.count > 0) this.state.count--;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
