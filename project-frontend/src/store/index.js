import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';


const store = createStore({
  state() {
    return {
      count: 0,
      token: 'no token',
      user: {},
    };
  },

  mutations: {
    addToken(state, payload){
      console.log('this is mutation');
      console.log(payload);
      state.token = payload
    },
    increment() {
      this.state.count++;
      console.log(this.state.count);
    },

    decrement() {
      if (this.state.count > 0) this.state.count--;
      console.log(this.state.count);
    },
  },

  actions: {
    updateToken(context, payload) {
      context.commit('addToken',payload);
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
