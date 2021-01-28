<template>
  <div class="container">
    <section class="section">
      <div>
        <carousel-3d
          controls-visible
          :width="carousel.width"
          :height="carousel.height"
          :display="3"
          :space="carousel.space"
        >
          <slide v-for="(product, i) in products" :key="i" :index="i">
            <nuxt-link :to="product.to" class="product__slide-container">
              <div>
                <span class="icon is-large">
                  <i :class="product.iconClass" />
                </span>
                <p>{{ product.text }}</p>
              </div>
            </nuxt-link>
          </slide>
        </carousel-3d>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";

export default Vue.extend({
  name: "Product",

  data() {
    return {
      products: [
        {
          to: "/san-pham/o-to",
          iconClass: "fas fa-car fa-4x",
          text: "Bảo hiểm ô tô"
        },

        {
          to: "/san-pham/tai-nan",
          iconClass: "fas fa-car-crash fa-4x",
          text: "Bảo hiểm tai nạn 24/24"
        },

        {
          to: "/san-pham/nha-tu-nhan",
          iconClass: "fas fa-house-damage fa-4x",
          text: "Bảo hiểm nhà tư nhân"
        },

        {
          to: "/san-pham/xe-may",
          iconClass: "fas fa-motorcycle fa-4x",
          text: "Bảo hiểm xe máy"
        }
      ],
      isMobile: true
    };
  },

  computed: {
    carousel() {
      if (this.isMobile) {
        return { width: 200, height: 300, space: 100 };
      }
      return { width: 360, height: 300, space: 400 };
    }
  },

  mounted() {
    this.isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  },

  head() {
    return {
      title: "Sản phẩm | Cửa hàng bảo hiểm"
    };
  }
});
</script>

<style lang="scss" scoped>
.product__slide-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
