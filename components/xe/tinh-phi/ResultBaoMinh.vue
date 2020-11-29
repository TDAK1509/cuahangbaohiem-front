<template>
  <div>
    <header>PVBảo MinhI</header>
    <p>{{ insuranceValue }}</p>
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import CarThresholdMixin from "@/mixins/car-threshold";

export default mixins(CarThresholdMixin).extend({
  name: "ResultBaoMinh",

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
        return this.getFirstThresholdInsuranceRate;
      }

      if (this.isCarValueInSecondThreshold) {
        return this.getSecondThresholdInsuranceRate;
      }

      if (this.isCarValueInThirdThreshold) {
        return this.getThirdThresholdInsuranceRate;
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

    getFirstThresholdInsuranceRate(): number {
      if (this.isCarYearInFirstThreshold) {
        return 1.52;
      }

      if (this.isCarYearInSecondThreshold) {
        return 1.774;
      }

      if (this.isCarYearGapInThirdThreshold) {
        return 1.906;
      }

      return 100;
    },

    getSecondThresholdInsuranceRate(): number {
      if (this.isCarYearInFirstThreshold) {
        return 1.443;
      }

      if (this.isCarYearInSecondThreshold) {
        return 1.675;
      }

      if (this.isCarYearGapInThirdThreshold) {
        return 1.807;
      }

      return 100;
    },

    getThirdThresholdInsuranceRate(): number {
      if (this.isCarYearInFirstThreshold) {
        return 1.443;
      }

      if (this.isCarYearInSecondThreshold) {
        return 1.675;
      }

      if (this.isCarYearGapInThirdThreshold) {
        return 1.807;
      }

      return 100;
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
