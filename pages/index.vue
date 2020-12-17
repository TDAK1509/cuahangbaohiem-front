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
          />
        </HomeRoundedButtonContainer>
      </div>
    </section>
  </div>
</template>

<script>
import navs from "@/json/navs.json";

export default {
  name: "Home",

  data() {
    return {
      navs
    };
  }
};
</script>
