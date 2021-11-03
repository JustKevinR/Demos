<template>
  <div>
    <h1>My first API</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jokes: [],
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get('https://icanhazdadjoke.com/search', config)
      this.jokes = res.data.results
    } catch (err) {
      console.log(err)
    }
  },
  head() {
    return {
      title: 'Jokes',
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
