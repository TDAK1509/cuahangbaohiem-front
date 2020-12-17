<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <HomeRoundedButtonContainer>
          <HomeRoundedButton
            v-for="(nav, index) in navs"
            :key="index"
            :label="nav.text"
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
