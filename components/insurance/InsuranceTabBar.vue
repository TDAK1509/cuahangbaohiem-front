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
export default {
  name: "InsuranceTabBar",

  props: {
    insuranceType: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      indexRouteName: `tinh-phi_${this.insuranceType}`,
      quyenLoiRouteName: `quyen-loi_${this.insuranceType}`,
      boiThuongRouteName: `boi-thuong_${this.insuranceType}`,
      khuyenMaiRouteName: `khuyen-mai_${this.insuranceType}`,
      taiLieuMauRouteName: `tai-lieu-mau_${this.insuranceType}`
    };
  },

  computed: {
    tabs() {
      return [
        {
          to: { name: this.indexRouteName },
          iconClass: "fas fa-calculator fa-2x",
          text: "TÍNH PHÍ & ĐẶT MUA",
          active: this.routeName === this.indexRouteName
        },

        {
          to: { name: this.quyenLoiRouteName },
          iconClass: "fas fa-list-alt fa-2x",
          text: "QUYỀN LỢI",
          active: this.routeName === this.quyenLoiRouteName
        },

        {
          to: { name: this.boiThuongRouteName },
          iconClass: "fas fa-hand-holding-usd fa-2x",
          text: "BỒI THƯỜNG",
          active: this.routeName === this.boiThuongRouteName
        },

        {
          to: { name: this.khuyenMaiRouteName },
          iconClass: "fas fa-gift fa-2x",
          text: "KHUYẾN MÃI",
          active: this.routeName === this.khuyenMaiRouteName
        },

        {
          to: { name: this.taiLieuMauRouteName },
          iconClass: "fas fa-file-alt fa-2x",
          text: "TÀI LIỆU MẪU",
          active: this.routeName === this.taiLieuMauRouteName
        }
      ];
    },

    routeName() {
      return this.$route.name;
    }
  }
};
</script>
