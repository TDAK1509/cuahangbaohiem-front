<template>
  <header class="px-6">
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img
            data-cy="logo"
            src="@/assets/images/logo.jpg"
            class="header__logo"
          />
        </nuxt-link>

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
.header__logo {
  height: 100px;
  width: auto;
}
</style>
