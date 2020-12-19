<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h4 class="title has-text-centered home__title">
          Các Sản Phẩm Bảo Hiểm
        </h4>

        <HomeRoundedButtonContainer>
          <HomeRoundedButton
            v-for="(nav, index) in navs"
            :key="index"
            :to="nav.to"
            :label="nav.text"
            :icon-class="`${nav.iconClass} ${iconSizeClass}`"
            :icon-color-class="nav.iconColorClass"
          />
        </HomeRoundedButtonContainer>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";
import debounce from "lodash/debounce";
import InsuranceNavs from "@/utils/insurance-navs";

const insuranceNavs = new InsuranceNavs();

export default Vue.extend({
  name: "Home",

  data() {
    return {
      navs: insuranceNavs.homeNavs,
      iconSizeClass: "fa-3x",
      onWindowResize: () => {}
    };
  },

  mounted() {
    const vm = this;

    function updateIsMobile() {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      vm.iconSizeClass = isMobile ? "fa-2x" : "fa-3x";
    }

    updateIsMobile();
    this.onWindowResize = debounce(updateIsMobile, 300);

    window.addEventListener("resize", this.onWindowResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize as () => any);
  }
});
</script>

<style lang="scss" scoped>
@import "~assets/scss/_breakpoints";

.home__title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

@media only screen and (max-width: $mobile) {
  .home__title {
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }
}
</style>
