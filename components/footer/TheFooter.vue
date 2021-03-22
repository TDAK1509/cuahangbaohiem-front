<template>
  <footer class="the-footer has-background-dark has-text-white">
    <div class="columns">
      <FooterFirstColumn />
      <FooterSecondColumn />
      <FooterThirdColumn />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.the-footer {
  padding: 1rem;
  margin-top: auto;
}
</style>
