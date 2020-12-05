<template>
  <section class="hero is-medium">
    <img
      class="hero__img"
      src="https://awake-template.netlify.app/_nuxt/uploads/c55865a-640.jpg"
      srcset="
        https://awake-template.netlify.app/_nuxt/uploads/c55865a-640.jpg   640w,
        https://awake-template.netlify.app/_nuxt/uploads/0761163-1027.jpg 1027w,
        https://awake-template.netlify.app/_nuxt/uploads/c9769a1-1414.jpg 1414w,
        https://awake-template.netlify.app/_nuxt/uploads/d4269c0-1800.jpg 1800w
      "
    />

    <div class="hero-body">
      <div class="container"></div>
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
