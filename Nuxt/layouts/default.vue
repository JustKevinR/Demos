<template>
  <div class="container">
    <AppHeader />
    <nuxt />
    <Bottom />
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
import Bottom from '~/components/Bottom.vue'
export default {
  components: {
    AppHeader,
    Bottom,
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
