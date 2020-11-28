<template>
  <div>
    <header>PVI</header>
    <p>{{ insuranceValue }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ResultPVI",

  props: {
    carValue: {
      type: Number,
      required: true
    },

    carYear: {
      type: Number,
      required: true
    }
  },

  computed: {
    insuranceValue(): number {
      return (400 * 1.7) / 100;
    }
  }
});
</script>

<style>
</style>
