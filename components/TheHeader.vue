<template>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <nuxt-link data-cy="logo" class="header__logo" to="/" />
        </div>

        <a class="navbar-burger burger" @click="toggleMenu">
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
      this.$refs.navbarMenu.classList.toggle("is-active");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";

$logo-size: 40px;

.header__logo {
  background: url("~assets/images/logo.jpg") no-repeat center center;
  background-size: cover;
  height: $logo-size;
  width: $logo-size;
}

@media screen and (max-width: $tablet) {
  $logo-size-mobile: 30px;
  .header__logo {
    height: $logo-size-mobile;
    width: $logo-size-mobile;
  }
}
</style>
