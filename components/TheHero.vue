<template>
  <section class="hero is-medium is-dark">
    <div class="hero-body">
      <img src="~assets/images/hero.jpg" class="hero__img" />

      <div class="container">
        <div class="hero__hotline-container">
          <h1 class="title hero__title has-text-black mb-1">Hotline:</h1>
          <h1 class="title hero__title has-text-white">0123456789</h1>
        </div>
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
@import "~assets/scss/_z-index";
@import "~assets/scss/_breakpoints";

.hero {
  z-index: $z-index-hero;
}

.hero-body {
  position: relative;
}

.hero__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__hotline-container {
  text-align: right;
}

@media only screen and (max-width: $mobile) {
  .hero__title {
    font-size: 1.5rem;
  }
}
</style>
