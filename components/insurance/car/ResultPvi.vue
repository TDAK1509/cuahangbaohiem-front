<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-pvi.png"
      company-name="PVI"
      :insurance-value="insuranceValue"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PviCarInsurance from "@/controller/car-insurance/pvi-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultPVI",

  data() {
    return {
      pvi: new PviCarInsurance(
        0,
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS,
        []
      ),
      insuranceValue: 0
    };
  },

  computed: {
    carValue(): number {
      return this.$store.state.car.carValue;
    },

    carYearThreshold(): CarYearThreshold {
      return this.$store.state.car.carYearThreshold;
    },

    addons(): CarInsuranceAddOn[] {
      return this.$store.state.car.addons;
    }
  },

  watch: {
    carValue(newValue: number) {
      this.pvi.setCarValue(newValue);
      this.calculateCarInsuranceValue();
    },

    carYearThreshold(newValue: number) {
      this.pvi.setCarYearThreshold(newValue);
      this.calculateCarInsuranceValue();
    },

    addons(newValue: CarInsuranceAddOn[]) {
      this.pvi.setAddons(newValue);
      this.calculateCarInsuranceValue();
    }
  },

  mounted() {
    this.pvi.setCarValue(this.carValue);
    this.pvi.setCarYearThreshold(this.carYearThreshold);
    this.pvi.setAddons(this.addons);
    this.calculateCarInsuranceValue();
  },

  methods: {
    calculateCarInsuranceValue() {
      this.insuranceValue = this.pvi.getCarInsuranceValue();
    }
  }
});
</script>

<style lang="scss" scoped>
.result-pvi__img {
  width: auto;
  height: 80px;
}
</style>
