<template>
  <div class="tabs is-toggle is-fullwidth">
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'is-active': tab.active }"
      >
        <nuxt-link :to="tab.to">
          <span class="icon is-small">
            <i :class="tab.iconClass" />
          </span>
          <span>{{ tab.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OtoTabBar",

  data() {
    return {
      tabs: [
        {
          to: { name: "tinh-phi-o-to" },
          iconClass: "fas fa-image",
          text: "TÍNH PHÍ & ĐẶT MUA",
          active: true
        },

        {
          to: { name: "quyen-loi-o-to" },
          iconClass: "fas fa-image",
          text: "QUYỀN LỢI",
          active: false
        },

        {
          to: { name: "boi-thuong-o-to" },
          iconClass: "fas fa-image",
          text: "BỒI THƯỜNG",
          active: false
        },

        {
          to: { name: "khuyen-mai-o-to" },
          iconClass: "fas fa-image",
          text: "KHUYẾN MÃI",
          active: false
        },

        {
          to: { name: "tai-lieu-mau-o-to" },
          iconClass: "fas fa-image",
          text: "TÀI LIỆU MẪU",
          active: false
        }
      ]
    };
  }
};
</script>
