<template>
  <div class="column">
    <h4 class="has-text-weight-bold is-uppercase">Các trang khác</h4>
    <ul class="is-size-7 mt-2">
      <li
        v-for="(nav, index) in navs"
        :key="index"
        class="mt-1"
        :class="{
          'footer-second-column__list-item--is-child ml-4': nav.isChild
        }"
      >
        <nuxt-link class="footer-second-column__link" :to="nav.to">{{
          nav.text
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterSecondColumn",

  data() {
    return {
      navs: [
        {
          text: "Giới thiệu",
          to: "/gioi-thieu",
          isChild: false
        },
        {
          text: "Sản phẩm",
          to: "/san-pham",
          isChild: false
        },
        {
          text: "Ô tô",
          to: "/san-pham/o-to",
          isChild: true
        },
        {
          text: "Tai nạn 24/24",
          to: "/san-pham/tai-nan",
          isChild: true
        },
        {
          text: "Nhà tư nhân",
          to: "/san-pham/nha-tu-nhan",
          isChild: true
        },
        {
          text: "Xe máy",
          to: "/san-pham/xe-may",
          isChild: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-second-column__link {
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
}

.footer-second-column__list-item {
  &--is-child {
    list-style-type: disc;
  }
}
</style>
