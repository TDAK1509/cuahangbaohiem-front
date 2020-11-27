<template>
  <header class="px-6">
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="@/assets/images/logo.jpg" class="header__logo" />
        </nuxt-link>

        <a class="navbar-burger burger" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/about">Về chúng tôi</nuxt-link>
          <a class="navbar-item">Xe</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header__logo {
  height: 100px;
  width: auto;
}
</style>
