<template>
  <div>
    <header>PVI</header>
    <p>{{ insuranceValue }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const CAR_VALUE_THRESHOLDS = [500, 700];
const YEAR_THRESHOLDS = [3, 6, 10];

export default Vue.extend({
  name: "ResultPVI",

  data() {
    return {
      thisYear: new Date().getFullYear()
    };
  },

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
      return (this.carValue * this.insuranceRate) / 100;
    },

    insuranceRate(): number {
      if (this.carValue < CAR_VALUE_THRESHOLDS[0]) {
        if (this.carYearGap <= YEAR_THRESHOLDS[0]) {
          return 1.7;
        }

        if (
          this.carYearGap > YEAR_THRESHOLDS[0] &&
          this.carYearGap <= YEAR_THRESHOLDS[1]
        ) {
          return 2.05;
        }

        if (
          this.carYearGap > YEAR_THRESHOLDS[1] &&
          this.carYearGap <= YEAR_THRESHOLDS[2]
        ) {
          return 2.35;
        }
      }

      return 0;
    },

    carYearGap(): number {
      return this.thisYear - this.carYear;
    }
  }
});
</script>

<style>
</style>
