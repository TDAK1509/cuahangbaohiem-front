<template>
  <div class="home container">
    <slider animation="fade" height="70vh">
      <slider-item>
        <figure>
          <img class="home__img" src="~/assets/images/slide-1.png" />
        </figure>
      </slider-item>

      <slider-item>
        <figure>
          <img class="home__img" src="~/assets/images/slide-2.png" />
        </figure>
      </slider-item>
    </slider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

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

.home__img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
