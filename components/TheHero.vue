<template>
  <section class="hero is-medium">
    <img class="hero__img" src="~assets/images/hero.jpg" />

    <div class="hero-body">
      <div class="container">
        <h1 class="title">Fullheight title</h1>
        <h2 class="subtitle">Fullheight subtitle</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
}

.hero__img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
