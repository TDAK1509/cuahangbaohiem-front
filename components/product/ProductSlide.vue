<template>
  <div>
    <span class="icon is-large">
      <i :class="iconClass" />
    </span>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductSlide",

  props: {
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
