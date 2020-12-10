<template>
  <div class="container">
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'is-active': tab.active }"
        >
          <nuxt-link :to="tab.to" class="is-flex is-flex-direction-column">
            <p class="icon is-large">
              <i :class="tab.iconClass" />
            </p>
            <p class="bold">{{ tab.text }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const indexRouteName = "tinh-phi-o-to";
const quyenLoiRouteName = "quyen-loi-o-to";
const boiThuongRouteName = "boi-thuong-o-to";
const khuyenMaiRouteName = "khuyen-mai-o-to";
const taiLieuMauRouteName = "tai-lieu-mau-o-to";

export default {
  name: "CarTabBar",

  computed: {
    tabs() {
      return [
        {
          to: { name: indexRouteName },
          iconClass: "fas fa-calculator fa-2x",
          text: "TÍNH PHÍ & ĐẶT MUA",
          active: this.routeName === indexRouteName
        },

        {
          to: { name: quyenLoiRouteName },
          iconClass: "fas fa-list-alt fa-2x",
          text: "QUYỀN LỢI",
          active: this.routeName === quyenLoiRouteName
        },

        {
          to: { name: boiThuongRouteName },
          iconClass: "fas fa-hand-holding-usd fa-2x",
          text: "BỒI THƯỜNG",
          active: this.routeName === boiThuongRouteName
        },

        {
          to: { name: khuyenMaiRouteName },
          iconClass: "fas fa-gift fa-2x",
          text: "KHUYẾN MÃI",
          active: this.routeName === khuyenMaiRouteName
        },

        {
          to: { name: taiLieuMauRouteName },
          iconClass: "fas fa-file-alt fa-2x",
          text: "TÀI LIỆU MẪU",
          active: this.routeName === taiLieuMauRouteName
        }
      ];
    },

    routeName() {
      return this.$route.name;
    }
  }
};
</script>
