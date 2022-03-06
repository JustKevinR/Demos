<template>
  <header class="header">
    <h1 class="title">What's up</h1>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
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
  background-color: rgba(85, 19, 97, 0.719);
  padding-left: 1rem;
  padding-right: 1rem;
}
.title {
  font-size: 3rem;
  font-weight: bold;
}

.header ul {
  display: flex;
}
.header a {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-size: 2rem;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  border-bottom: red solid 0.2rem;
}
.header a:hover {
  color: gray;
  border-bottom: gray solid 0.2rem;
}
</style>
