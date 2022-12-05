<template>
    <div class="mt-5 text-center container">
        <div class="my-5 mx-5">
          <h1>Map State Example</h1>
          <h3 class="mt-5">Main Title is {{xyz}}</h3>
      </div> 
        <div class="my-5 mx-5">
          <h1>Map Getters Example</h1>
          <h3 class="mt-5">{{privateKey}}</h3>
      </div> 
      <div class="my-5 mx-5">
          <h1>Getters Parameter</h1>
          <h3 class="mt-5">My name is {{secret('Mahadi')}}</h3>
      </div>
      <div class="my-5 mx-5">
          <h1>Map Action Here</h1>
          <h3 class="mt-5">Map Action {{secret('Mahadi')}}</h3>
      </div>
      <div class="my-5 mx-5">
          <h1>Commit Example</h1>
          <h3 class="mt-5">My name is {{$store.state.userInfo?.name}} {{$store.state.userInfo?.phone}} </h3>
          <button class="btn btn-primary my-2" @click="clickedMe">Click Me</button>
          <h3 class="my-2">Clicked {{$store.state.userInfo?.name}} {{$store.state.userInfo?.phone}} </h3>
      </div> 
      <div class="my-5 mx-5">
          <h1>Action Example</h1>
          <h3 class="mt-5">My name is {{$store.state.newAction?.name}} {{$store.state.newAction?.phone}} </h3>
          <button class="btn btn-primary my-2" @click="clickedForAction">Click Me</button>
          <h3 class="my-2">Clicked {{$store.state.newAction?.name}} {{$store.state.newAction?.phone}} </h3>
      </div> 
      <div class="my-5 mx-5">
          <h1>Getters Example</h1>
          <h3 class="mt-5">My name is {{getNewGetters}}</h3>
          <button class="btn btn-primary my-2" @click="getName">Click Me</button>
          <h3 class="my-2">Clicked {{getNewGetters}} </h3>
      </div> 
      <div class="my-5 mx-5">
          <h1>Getters Parameter</h1>
          <h3 class="mt-5">My name is {{newSecret}}</h3>
      </div>
    </div>
  </template>
  
  <script>
    import { mapState, mapGetters } from 'vuex';
  export default {
    name: "MyComponent",
    data() {
      return {
      };
    },

    methods:{
        clickedMe(){
            this.$store.commit({type: "myNameClicked",name: "Mahadi Hassan Babu",phone: "01795-232590"}); // Commit Examfa-pull-left
        },

        clickedForAction(){
            this.$store.dispatch({type: "actionTriggered",name: "Ratul",phone: "01795-232599"}); // Commit Examfa-pull-left
        }
    },
  
    created() {
     
    },
    mounted(){
      console.log('Not Found Page');
    },
    computed:{
        ...mapState({
            xyz:state => state.mainTitle
        }),
        ...mapGetters({
            privateKey: 'hadAdd',
            secret: 'secret',
        }),
        getName(){
           return this.$store.getters.hadAdd;
        },
        getNewGetters(){
           return this.$store.getters.hadNew;
        },
        newSecret(){
           return this.$store.getters.secret('projectXSecret Key');
        },

    },
  
  };
  </script>
  