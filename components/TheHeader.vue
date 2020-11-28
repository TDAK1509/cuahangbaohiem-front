<template>
  <header class="px-6 py-3">
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link data-cy="logo" class="navbar-item header__logo" to="/" />

        <a class="navbar-burger burger" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" class="navbar-menu">
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
  name: "Header"
};
</script>

<style lang="scss" scoped>
$logo-size: 50px;

.header__logo {
  background: url("~assets/images/logo.jpg") no-repeat center center;
  background-size: cover;
  height: $logo-size;
  width: $logo-size;
}
</style>
