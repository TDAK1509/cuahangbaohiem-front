<template>
  <section class="hero is-medium is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Primary bold title</h1>
        <h2 class="subtitle">Primary bold subtitle</h2>
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

.hero {
  z-index: $z-index-hero;
}
</style>
