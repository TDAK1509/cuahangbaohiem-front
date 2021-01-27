<template>
  <nav ref="nav" class="header-nav">
    <div class="header-nav__burger">
      <span class="icon is-large has-text-dark" @click="toggleShowNav">
        <i class="fas fa-2x fa-bars"></i>
      </span>
    </div>

    <ul class="header-nav__ul--desktop">
      <li class="header-nav__li">
        <nuxt-link class="header__single-link header__link" to="/gioi-thieu">
          Giới thiệu
        </nuxt-link>
      </li>

      <li class="header-nav__li">
        <nuxt-link class="header__single-link header__link" to="/san-pham">
          Sản phẩm
        </nuxt-link>
      </li>
    </ul>

    <ul v-show="showNav" class="header-nav__ul--mobile">
      <li class="header-nav__li">
        <nuxt-link class="header__single-link header__link" to="/gioi-thieu">
          Giới thiệu
        </nuxt-link>
      </li>

      <li class="header-nav__li">
        <nuxt-link class="header__single-link header__link" to="/san-pham">
          Sản phẩm
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",

  data() {
    return {
      showNav: false
    };
  },

  mounted() {
    this.closeNavOnRouteChange();
  },

  methods: {
    toggleShowNav() {
      this.showNav = !this.showNav;
    },

    closeNav() {
      this.showNav = false;
    },

    closeNavOnRouteChange() {
      const routeLinkDoms = this.$refs.nav.querySelectorAll(".header__link");

      routeLinkDoms.forEach((routeLinkDom) => {
        routeLinkDom.addEventListener("click", () => {
          this.closeNav();
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_colors";
@import "~assets/scss/_breakpoints";

.header-nav {
  height: 100%;
  flex: 1;
}

.header-nav__burger {
  display: none;
}

.header-nav__ul--desktop {
  display: flex;
  align-items: center;
  height: 100%;
}

.header-nav__ul--mobile {
  display: none;
}

.header-nav__li {
  margin-left: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.header__single-link {
  color: $grey-darker;

  &.is-active {
    color: $link;
    font-weight: 700;
  }

  &:hover {
    color: $link;
  }
}

@media only screen and (max-width: $mobile) {
  $header-height: 75px;
  $border-color-mobile: $grey;

  .header-nav {
    position: relative;
  }

  .header-nav__burger {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }

  .header-nav__ul--desktop {
    display: none;
  }

  .header-nav__ul--mobile {
    display: block;
    background: #fff;
    position: fixed;
    top: $header-height;
    left: 0;
    width: 100%;
    height: calc(100% - #{$header-height});
    overflow: auto;
  }

  .header-nav__li {
    height: auto;
    margin-left: 0;
    border-bottom: 1px solid $border-color-mobile;
  }

  .header__single-link {
    width: 100%;
    padding: 15px;

    &.is-active {
      background: $primary;
      color: #fff;
    }
  }
}
</style>
