<template>
  <div class="home container">
    <agile>
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
.home {
  z-index: 0;
}

.home__slide {
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
}

.home__img {
  height: 100%;
  object-fit: cover;
}
</style>
