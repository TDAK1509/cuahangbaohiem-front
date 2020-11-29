<template>
  <div>
    <header>Bảo Việt</header>
    <p>{{ insuranceValue }}</p>
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import CarThresholdMixin from "@/mixins/car-threshold";

export default mixins(CarThresholdMixin).extend({
  name: "ResultBaoViet",

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
          return 2.2825;
        }

        if (this.isCarYearInSecondThreshold) {
          return 2.5795;
        }

        if (this.isCarYearGapInThirdThreshold) {
          return 2.6785;
        }
      }

      if (this.isCarValueInSecondThreshold) {
        if (this.isCarYearInFirstThreshold) {
          return 2.0185;
        }

        if (this.isCarYearInSecondThreshold) {
          return 2.3045;
        }

        if (this.isCarYearGapInThirdThreshold) {
          return 2.4365;
        }
      }

      if (this.isCarValueInThirdThreshold) {
        if (this.isCarYearInFirstThreshold) {
          return 1.5345;
        }

        if (this.isCarYearInSecondThreshold) {
          return 1.7325;
        }

        if (this.isCarYearGapInThirdThreshold) {
          return 2.2055;
        }
      }

      return 100;
    },

    isCarValueInFirstThreshold(): boolean {
      return this.mixinIsCarValueInFirstThreshold(this.carValue);
    },

    isCarValueInSecondThreshold(): boolean {
      return this.mixinIsCarValueInSecondThreshold(this.carValue);
    },

    isCarValueInThirdThreshold(): boolean {
      return this.mixinIsCarValueInThirdThreshold(this.carValue);
    },

    isCarYearInFirstThreshold(): boolean {
      return this.mixinIsCarYearInFirstThreshold(this.carYearGap);
    },

    isCarYearInSecondThreshold(): boolean {
      return this.mixinIsCarYearInSecondThreshold(this.carYearGap);
    },

    isCarYearGapInThirdThreshold(): boolean {
      return this.mixinIsCarYearInThirdThreshold(this.carYearGap);
    },

    carYearGap(): number {
      return this.thisYear - this.carYear;
    }
  }
});
</script>

<style>
</style>
