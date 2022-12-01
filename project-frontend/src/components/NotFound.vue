<template>
  <div class="mt-5 text-center container">
    <div class="my-5 mx-5">
        <h1>404</h1>
    </div> 
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    msg: String,
  },

  data() {
    return {
    };
  },

  created() {
   
  },
  mounted(){
    console.log('Not Found Page');
  }

};
</script>
