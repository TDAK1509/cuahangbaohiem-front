<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-pvi.png"
      company-name="PVI"
      :insurance-value="insuranceFee"
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
        CarInsuranceAddOn.BASIC
      ),
      insuranceFee: 0
    };
  },

  computed: {
    carValue(): number {
      return this.$store.state.car.carValue;
    },

    carYearThreshold(): CarYearThreshold {
      return this.$store.state.car.carYearThreshold;
    },

    addon(): CarInsuranceAddOn {
      return this.$store.state.car.addon;
    }
  },

  watch: {
    carValue(newValue: number) {
      this.pvi.setCarValue(newValue);
      this.calculateCarInsuranceFee();
    },

    carYearThreshold(newValue: number) {
      this.pvi.setCarYearThreshold(newValue);
      this.calculateCarInsuranceFee();
    },

    addon(newValue: CarInsuranceAddOn) {
      this.pvi.setAddon(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.pvi.setCarValue(this.carValue);
    this.pvi.setCarYearThreshold(this.carYearThreshold);
    this.pvi.setAddon(this.addon);
    this.calculateCarInsuranceFee();
  },

  methods: {
    calculateCarInsuranceFee() {
      this.insuranceFee = this.pvi.getInsuranceFee();
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
