<template>
  <div class="home container">
    <client-only>
      <vue-carousel v-bind="carouselOptions">
        <vue-carousel-slide>
          <figure ref="slide1" class="home__slide">
            <img class="home__img" src="~/assets/images/slide-1.png" />
          </figure>
        </vue-carousel-slide>
        <vue-carousel-slide>
          <figure ref="slide2" class="home__slide">
            <img class="home__img" src="~/assets/images/slide-2.png" />
          </figure>
        </vue-carousel-slide>
      </vue-carousel>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  layout: "home",

  data() {
    return {
      carouselOptions: {
        perPage: 1,
        autoplay: true,
        centerMode: true,
        loop: true,
        paginationEnabled: false
      }
    };
  },

  mounted() {
    this.$nextTick().then(() => {
      this.setSlideHeight();
    });
  },

  methods: {
    setSlideHeight() {
      const headerHeight = document.querySelector("header.header")!
        .clientHeight;
      const footerHeight = document.querySelector("footer.the-footer")!
        .clientHeight;
      const slideHeight = window.innerHeight - headerHeight - footerHeight;
      this.$refs.slide1.style.height = slideHeight + "px";
      this.$refs.slide2.style.height = slideHeight + "px";
    }
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
  height: 0;
}

.home__img {
  height: 100%;
  object-fit: scale-down;
}
</style>
