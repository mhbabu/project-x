<template>
  <div class="container">
    <h1>{{ $store.state.count }}</h1>
    <button @click="$store.dispatch('increment')"><i class="fa fa-plus"></i></button>
    <button @click="$store.dispatch('decrement')"><i class="fa fa-minus"></i></button>
  </div>
</template>

<script>
export default {
  name: "VueXComponent",
};
</script>
