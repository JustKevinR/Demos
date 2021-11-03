<template>
  <header class="header">
    <h1 class="title">What's up</h1>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jokes/jokes">API</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(65, 8, 75, 0.719);
  padding-left: 1rem;
  padding-right: 1rem;
}
.header .title {
  font-size: 4rem;
  color: #526488;
}
.header ul {
  display: flex;
}
.header a {
  display: inline-block;
  background: #333;
  color: #fff;
  font-size: 2rem;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
</style>
