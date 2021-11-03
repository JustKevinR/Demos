<template>
  <div class="container">
    <AppHeader />
    <nuxt />
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: {
    AppHeader,
  },
}
</script>
<style>
body {
  background-color: black;
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
h1,
p,
h2 {
  color: wheat;
}
</style>
