<template>
  <div>
    <input v-model="carValue" data-cy="car-value" />
    <input v-model="carYear" data-cy="car-year" />
    <button data-cy="calculate-button" @click="calculate">TÍNH PHÍ</button>

    <div v-if="hasResult" data-cy="result">Result</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TinhPhiXe",

  data() {
    return {
      hasResult: false,
      carValue: null,
      carYear: null
    };
  },

  methods: {
    calculate() {
      if (!this.carValue || !this.carYear) {
        return;
      }

      this.hasResult = true;
    }
  }
});
</script>

<style>
</style>
