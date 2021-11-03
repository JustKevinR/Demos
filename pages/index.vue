<template>
  <div class="welcome">
    <h1>Welcome</h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Welcome',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place to find your thingy',
        },
      ],
    }
  },
}
</script>

<style>
.welcome {
  display: flex;
  justify-content: center;
  font-size: 10rem;
}
</style>
