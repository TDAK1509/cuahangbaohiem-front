<template>
  <footer class="footer has-background-dark has-text-white">
    <div class="columns">
      <FooterFirstColumn />

      <div class="column">
        <h4 class="is-size-5">COLUMN 2</h4>
      </div>
      <div class="column">
        <h4 class="is-size-5">COLUMN 3</h4>
      </div>
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
