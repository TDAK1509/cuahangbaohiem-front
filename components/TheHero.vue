<template>
  <section class="hero is-medium is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title hero__title has-text-white mb-2">HOTLINE:</h1>
        <h1 class="title hero__title has-text-warning">0123456789</h1>
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

@media only screen and (max-width: $mobile) {
  .hero__title {
    font-size: 1.5rem;
  }
}
</style>
