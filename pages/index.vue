<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <HomeRoundedButtonContainer>
          <HomeRoundedButton
            v-for="(nav, index) in navs"
            :key="index"
            :to="nav.to"
            :label="nav.text"
            :icon-class="nav.iconClass"
            :icon-color-class="nav.iconColorClass"
          />
        </HomeRoundedButtonContainer>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InsuranceNavs from "@/utils/insurance-navs";

const insuranceNavs = new InsuranceNavs();

export default Vue.extend({
  name: "Home",

  data() {
    return {
      navs: insuranceNavs.homeNavs
    };
  }
});
</script>
