<template>
  <footer class="footer has-background-dark has-text-white">
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
.footer__image {
  height: 40px;
  width: auto;
}
</style>
