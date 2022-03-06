<template>
  <div class="about">
    <div class="txt">
      <div class="name"><h1>Hayao Miyazaki</h1></div>
      <div class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, pariatur
        doloremque eaque quis nihil ipsa placeat praesentium eveniet fugiat,
        totam in? Nulla totam laudantium voluptate est alias repudiandae dolor
        perspiciatis!
      </div>
    </div>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg/800px-Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg"
      alt=""
    />
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
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  padding-right: 5rem;
  padding-left: 5rem;
}
.info {
  width: 20rem;
  text-align: justify;
  color: wheat;
  font-size: 1.5rem;
}
.about img {
  height: 400px;
  border: solid 1rem magenta;
  margin-left: 3rem;
}
.name {
  text-align: center;
  font-weight: bold;
}
</style>
