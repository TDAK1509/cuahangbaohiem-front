<template>
  <nav class="header-nav">
    <ul class="header-nav__ul">
      <li class="header-nav__li">
        <nuxt-link class="header__single-link" to="/gioi-thieu">
          Giới thiệu
        </nuxt-link>
      </li>

      <li class="header-nav__li">
        <div class="header-nav__dropdown">
          <div class="center header-nav__dropdown-label">
            Sản phẩm

            <span class="icon has-text-dark header-nav__dropdown-icon">
              <i class="fas fa-chevron-down"></i>
            </span>
          </div>

          <ul class="header-nav__dropdown-content">
            <li
              v-for="(nav, index) in navs"
              :key="index"
              class="header-nav__dropdown-li"
            >
              <nuxt-link
                :data-cy="nav.dataCy"
                :to="nav.to"
                class="header-nav__dropdown-link"
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
        <nuxt-link class="header__single-link" to="/huong-dan">
          Hướng dẫn
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
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_colors";

.header-nav {
  height: 100%;
}

.header-nav__ul {
  display: flex;
  justify-content: space-between;
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
}

.header__single-link:hover {
  color: $link;
}

.header__single-link.is-active {
  color: $link;
}

.header-nav__dropdown {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.header-nav__dropdown-label {
  cursor: default;
}

.header-nav__dropdown-icon {
  margin-top: -4px;
}

.header-nav__dropdown-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  visibility: hidden;
}

.header-nav__dropdown:hover .header-nav__dropdown-content {
  visibility: visible;
}

.header-nav__dropdown-li {
  padding: 8px 8px;
  background: #fff;
  width: 300px;
}

.header-nav__dropdown-li:hover {
  background: $grey-lighter;
  cursor: pointer;
}

.header-nav__dropdown-link {
  color: inherit;
}
</style>
