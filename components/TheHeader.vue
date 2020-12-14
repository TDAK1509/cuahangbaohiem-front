<template>
  <header class="header">
    <nuxt-link data-cy="logo" to="/">
      <img class="image header__logo px-2 py-2" src="~assets/images/logo.png" />
    </nuxt-link>

    <TheHeaderNav />
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
}

.header__logo {
  height: 60px;
  width: auto;
}
</style>
