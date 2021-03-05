<template>
  <div class="home container">
    <agile :nav-buttons="false" autoplay>
      <figure class="home__slide">
        <img class="home__img" src="~/assets/images/slide-1.png" />
      </figure>

      <figure class="home__slide">
        <img class="home__img" src="~/assets/images/slide-2.png" />
      </figure>
    </agile>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data() {
    return {
      sliderHeight: 0
    };
  },

  mounted() {
    const headerHeight = 75;
    const footerHeight = 138;
    this.sliderHeight = window.innerHeight - headerHeight - footerHeight;
  },

  head() {
    return {
      title: "Cửa hàng bảo hiểm"
    };
  }
});
</script>

<style lang="scss" scoped>
@import "~assets/scss/_breakpoints";

.home {
  z-index: 0;
}

.home__slide {
  width: 500px;
  height: 666px;
  display: flex;
  justify-content: center;
}

.home__img {
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1200px) {
  .home__slide {
    width: 580px;
    height: 773px;
  }
}

@media only screen and (max-width: $mobile) {
  .home__slide {
    width: 300px;
    height: 400px;
  }
}

@media only screen and (max-width: 374px) {
  .home__slide {
    width: 250px;
    height: 333px;
  }
}
</style>
