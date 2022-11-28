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

      console.log('bb');
    },

    decrement() {
      if (this.state.count > 0) count--;
    },
  },
});


export default store;
