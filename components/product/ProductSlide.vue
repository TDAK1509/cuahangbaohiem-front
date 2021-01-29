<template>
  <nuxt-link :to="to" class="product-slide">
    <div class="product-slide__content">
      <div class="product-slide__icon-container">
        <span class="icon is-large">
          <i :class="iconClass" />
        </span>
      </div>
      <p class="product-slide__text has-background-dark has-text-white">
        {{ text }}
      </p>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductSlide",

  props: {
    to: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
});
</script>

<style lang="scss" scoped>
@import "~assets/scss/_colors";

.product-slide {
  width: 100%;
  height: 100%;
  display: block;
  background: #fff;

  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
}

.product-slide__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.product-slide__icon-container {
  flex: 1;
  display: flex;
  align-items: center;
}

.product-slide__text {
  padding: 1rem;
  width: 100%;
  text-align: center;
}
</style>
