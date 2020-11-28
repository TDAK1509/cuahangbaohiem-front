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

  data() {
    return {
      thisYear: new Date().getFullYear()
    };
  },

  computed: {
    insuranceValue(): number {
      return (this.carValue * this.insuranceRate) / 100;
    },

    insuranceRate(): number {
      if (this.isCarValueInFirstThreshold) {
        if (this.isCarYearInFirstThreshold) {
          return 1.7;
        }

        if (this.isCarYearInSecondThreshold) {
          return 2.05;
        }

        if (this.isCarYearGapInThirdThreshold) {
          return 2.35;
        }
      }

      if (this.isCarValueInSecondThreshold) {
        if (this.isCarYearInFirstThreshold) {
          return 1.45;
        }

        if (this.isCarYearInSecondThreshold) {
          return 1.74;
        }

        if (this.isCarYearGapInThirdThreshold) {
          return 2;
        }
      }

      if (this.isCarValueInThirdThreshold) {
        if (this.isCarYearInFirstThreshold) {
          return 1.28;
        }

        if (this.isCarYearInSecondThreshold) {
          return 1.54;
        }

        if (this.isCarYearGapInThirdThreshold) {
          return 1.76;
        }
      }

      return 100;
    },

    isCarValueInFirstThreshold(): boolean {
      return this.carValue < 500;
    },

    isCarValueInSecondThreshold(): boolean {
      return this.carValue >= 500 && this.carValue < 700;
    },

    isCarValueInThirdThreshold(): boolean {
      return this.carValue >= 700;
    },

    isCarYearInFirstThreshold(): boolean {
      return this.carYearGap <= 3;
    },

    isCarYearInSecondThreshold(): boolean {
      return this.carYearGap > 3 && this.carYearGap <= 6;
    },

    isCarYearGapInThirdThreshold(): boolean {
      return this.carYearGap > 6 && this.carYearGap <= 10;
    },

    carYearGap(): number {
      return this.thisYear - this.carYear;
    }
  }
});
</script>

<style>
</style>
