<template>
  <div class="container">
    <section class="section">
      <div>
        <carousel-3d controls-visible>
          <slide v-for="(slide, i) in 5" :key="i" :index="i">
            <figure>
              <img src="https://placehold.it/360x270" />
              <figcaption>
                The sky is the limit only for those who aren't afraid to fly!
                The sky is the limit only for those who aren't afraid to fly!
              </figcaption>
            </figure>
          </slide>
        </carousel-3d>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Product",

  head() {
    return {
      title: "Sản phẩm | Cửa hàng bảo hiểm"
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
