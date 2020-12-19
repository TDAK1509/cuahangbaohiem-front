<template>
  <nav ref="nav" class="header-nav">
    <div class="header-nav__burger">
      <span class="icon is-large has-text-dark" @click="toggleShowNav">
        <i class="fas fa-2x fa-bars"></i>
      </span>
    </div>

    <ul v-show="showNav" class="header-nav__ul">
      <li class="header-nav__li">
        <nuxt-link class="header__single-link header__link" to="/gioi-thieu">
          Giới thiệu
        </nuxt-link>
      </li>

      <li class="header-nav__li">
        <div class="header-nav__dropdown">
          <div class="header-nav__dropdown-label">
            Sản phẩm

            <span class="icon has-text-dark">
              <i class="fas fa-angle-down"></i>
            </span>
          </div>

          <ul class="header-nav__dropdown-ul">
            <li v-for="(nav, index) in navs" :key="index">
              <nuxt-link
                :data-cy="nav.dataCy"
                :to="nav.to"
                class="header-nav__dropdown-link header__link"
              >
                <span class="icon is-medium">
                  <i :class="nav.iconClass" />
                </span>
                <span class="is-size-6">{{ nav.text }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>

      <li class="header-nav__li">
        <nuxt-link class="header__single-link header__link" to="/huong-dan">
          Hướng dẫn
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";
import debounce from "lodash/debounce";
import InsuranceNavs from "@/utils/insurance-navs";

const insuranceNavs = new InsuranceNavs();

export default {
  name: "HeaderNav",

  data() {
    return {
      showNav: true,
      navs: insuranceNavs.headerNavs,
      onWindowResize: () => {}
    };
  },

  mounted() {
    const vm = this;

    function updateNavBehavior() {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      if (isMobile) {
        vm.closeNav();
        vm.closeNavOnRouteChange();
      } else {
        vm.showNav = true;
      }
    }

    updateNavBehavior();
    this.onWindowResize = debounce(updateNavBehavior, 300);

    window.addEventListener("resize", this.onWindowResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  methods: {
    toggleShowNav() {
      this.showNav = !this.showNav;
    },

    closeNav() {
      this.showNav = false;
    },

    closeNavOnRouteChange() {
      const dropdownLinks = this.$refs.nav.querySelectorAll(".header__link");

      dropdownLinks.forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", () => {
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

.header-nav__ul {
  display: flex;
  align-items: center;
  height: 100%;
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
  }

  &:hover {
    color: $link;
  }
}

.header-nav__dropdown {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.header-nav__dropdown-label {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-nav__dropdown-ul {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  visibility: hidden;
}

.header-nav__dropdown:hover .header-nav__dropdown-ul {
  visibility: visible;
}

.header-nav__dropdown-link {
  color: inherit;
  padding: 8px 8px;
  background: #fff;
  width: 300px;
  display: block;

  &:hover {
    background: $grey-lighter;
    cursor: pointer;
  }

  &.is-active,
  &.is-active:hover {
    background: $primary;
    color: #fff;
    cursor: default;
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

  .header-nav__ul {
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

  .header-nav__dropdown {
    display: block;
    text-align: left;
    width: 100%;
  }

  .header-nav__dropdown-label {
    justify-content: flex-start;
    padding: 15px;

    .icon {
      display: none;
    }
  }

  .header-nav__dropdown-ul {
    display: block;
    position: static;
    top: 0;
    left: 0;
    visibility: visible;
  }

  .header-nav__dropdown-link {
    padding: 15px;
    width: 100%;
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
