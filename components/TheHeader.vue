<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link data-cy="logo" to="/">
          <img
            class="image header__logo px-2 py-2"
            src="~assets/images/logo.png"
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

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Sản phẩm</a>

            <div class="navbar-dropdown is-right">
              <nuxt-link
                v-for="(nav, index) in navs"
                :key="index"
                :data-cy="nav.dataCy"
                class="navbar-item"
                :to="nav.to"
              >
                <span class="icon is-medium">
                  <i :class="nav.iconClass" />
                </span>
                <span class="is-size-6">{{ nav.text }}</span>
              </nuxt-link>
            </div>
          </div>

          <nuxt-link class="navbar-item header__single-link" to="/huong-dan">
            Hướng dẫn
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      navs: [
        {
          dataCy: "insurance-car",
          to: "/san-pham/o-to",
          iconClass: "fas fa-car",
          text: "Bảo hiểm ô tô"
        },

        {
          dataCy: "insurance-accident",
          to: "/san-pham/tai-nan",
          iconClass: "fas fa-car-crash",
          text: "Bảo hiểm tai nạn 24/24"
        },

        {
          dataCy: "insurance-personal-health",
          to: "/san-pham/suc-khoe-ca-nhan",
          iconClass: "fas fa-file-medical",
          text: "Bảo hiểm sức khỏe cá nhân"
        },

        {
          dataCy: "insurance-cancer",
          to: "/san-pham/benh-ung-thu",
          iconClass: "fas fa-disease",
          text: "Bảo hiểm bệnh ung thư"
        },

        {
          dataCy: "insurance-house",
          to: "/san-pham/nha-tu-nhan",
          iconClass: "fas fa-house-damage",
          text: "Bảo hiểm nhà tư nhân"
        },

        {
          dataCy: "insurance-motorbike",
          to: "/san-pham/xe-may",
          iconClass: "fas fa-motorcycle",
          text: "Bảo hiểm xe máy"
        },

        {
          dataCy: "insurance-travel",
          to: "/san-pham/du-lich-quoc-te",
          iconClass: "fas fa-plane-departure",
          text: "Bảo hiểm du lịch quốc tế"
        },

        {
          dataCy: "insurance-life",
          to: "/san-pham/nhan-tho",
          iconClass: "fas fa-male",
          text: "Bảo hiểm nhân thọ"
        }
      ]
    };
  },

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

.header {
  position: sticky;
  top: 0;
}

.header__logo {
  height: 60px;
  width: auto;
}

.header__single-link.is-active {
  color: $link;
}
</style>
