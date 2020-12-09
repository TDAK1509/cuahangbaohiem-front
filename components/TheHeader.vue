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
          <nuxt-link class="navbar-item header__single-link" to="/gioi-thieu">
            Giới thiệu
          </nuxt-link>

          <nuxt-link class="navbar-item header__single-link" to="/huong-dan">
            Hướng dẫn
          </nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Tính phí bảo hiểm</a>

            <div class="navbar-dropdown is-right">
              <nuxt-link
                data-cy="insurance-car"
                class="navbar-item"
                to="/tinh-phi-bao-hiem/o-to"
              >
                <span class="icon is-medium"><i class="fas fa-car"></i></span>
                <span class="is-size-6">Bảo hiểm xe</span>
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

  mounted() {
    this.hideDropdownOnClickNuxtLink();
  },

  methods: {
    toggleMenu() {
      this.$refs.navbarBurger.classList.toggle("is-active");
      this.$refs.navbarMenu.classList.toggle("is-active");
    },

    hideDropdownOnClickNuxtLink() {
      this.$refs.navbarMenu.querySelectorAll(".has-dropdown").forEach((el) => {
        el.addEventListener("click", () => {
          const menu = el.querySelector(".navbar-dropdown");
          menu.style.display = "none";
          setTimeout(() => {
            el.blur();
            menu.style.display = "";
          }, 200);
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_colors";

.header__logo {
  height: 60px;
  width: auto;
}

.header__single-link.is-active {
  color: $link;
}
</style>
