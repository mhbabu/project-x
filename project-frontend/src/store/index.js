import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {},

  actions: {
    increment() {
      this.state.count++;
    },

    decrement() {
      if (this.state.count > 0) this.state.count--;
    },
  },
});


export default store;
