<template>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link data-cy="logo" to="/">
          <img
            class="image header__logo px-2 py-2"
            src="~assets/images/logo.jpg"
          />
        </nuxt-link>

        <a ref="navbarBurger" class="navbar-burger burger" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div ref="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/ve-chung-toi">
            Về chúng tôi
          </nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Xe</a>

            <div class="navbar-dropdown is-right">
              <nuxt-link class="navbar-item" to="/xe/tinh-phi">
                Tính phí bảo hiểm
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  methods: {
    toggleMenu() {
      this.$refs.navbarBurger.classList.toggle("is-active");
      this.$refs.navbarMenu.classList.toggle("is-active");
    }
  }
};
</script>

<style lang="scss" scoped>
.header__logo {
  height: 60px;
  width: auto;
}
</style>
