<template>
  <div class="container">
    <slider animation="fade">
      <slider-item v-for="i in 5" :key="i">
        <p style="line-height: 280px; font-size: 5rem; text-align: center">
          Page{{ i }}
        </p>
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
