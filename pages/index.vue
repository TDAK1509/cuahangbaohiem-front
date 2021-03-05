<template>
  <div class="home container">
    <client-only>
      <vue-carousel v-bind="carouselOptions">
        <vue-carousel-slide>
          <img class="home__img" src="~/assets/images/slide-1.png" />
        </vue-carousel-slide>
        <vue-carousel-slide>
          <img class="home__img" src="~/assets/images/slide-2.png" />
        </vue-carousel-slide>
      </vue-carousel>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

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

// .home__slide {
//   width: 500px;
//   height: 666px;
//   display: flex;
//   justify-content: center;
// }

// .home__img {
//   height: 100%;
//   object-fit: cover;
// }
</style>
