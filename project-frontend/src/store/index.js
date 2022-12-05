import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      count: 0,
      token: null,
      user: {},
      userInfo: null,
      newAction: null,
      getName: null,
      ability: '123456',
      secretKey: '123456',
      mainTitle: 'Mahadi Hassan - Project X'
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

    /********Advanced Tropic ******* */
    myNameClicked(state,payload){
      state.userInfo = payload;
    },

    newAction(state,payload){
      state.newAction = payload;
    }

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
     /********Advanced Tropic ******* */
    actionTriggered(context, payload){
     context.commit('newAction',payload);
    }
  },
  getters:{
    hadAdd(state){
     return state.getName = 'Babu'
    },
    hadNew(state,getters){
      return state.ability + ' ' + getters.hadAdd + ' ' + " and my phone number is 01795232590"
    },
    secret:(state)=>data=>{
      return data + ' fasfasfsadf ' + state.secretKey
    }
  }
  // plugins: [createPersistedState()],
});

export default store;
