<template>
  <div class="about">
    <h1>Abount this thingy</h1>
    <p>This is very big thingy</p>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'About thingy',
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
.about {
  padding-right: 5rem;
  padding-left: 5rem;
}
</style>
