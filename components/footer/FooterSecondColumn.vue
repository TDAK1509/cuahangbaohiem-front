<template>
  <div class="column">
    <h4 class="has-text-weight-bold is-uppercase">Sản phâm</h4>
    <ul class="is-size-7 mt-2">
      <li
        v-for="(nav, index) in navs"
        :key="index"
        class="footer-second-column__list-item mt-1 ml-4"
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
          text: "Ô tô",
          to: "/san-pham/o-to"
        },
        {
          text: "Tai nạn 24/24",
          to: "/san-pham/tai-nan"
        },
        {
          text: "Nhà tư nhân",
          to: "/san-pham/nha-tu-nhan"
        },
        {
          text: "Xe máy",
          to: "/san-pham/xe-may"
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
  list-style-type: disc;
}
</style>
