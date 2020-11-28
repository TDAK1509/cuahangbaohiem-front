<template>
  <div>
    <input data-cy="car-value" v-model="carValue" />
    <input data-cy="car-year" v-model="carYear" />
    <button data-cy="calculate-button" @click="calculate">TÍNH PHÍ</button>

    <div data-cy="result" v-if="hasResult">Result</div>
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
