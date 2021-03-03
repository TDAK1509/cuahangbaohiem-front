<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-pvi.png"
      company-name="PVI"
      :insurance-fee="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PviCarInsurance from "@/controller/car-insurance/pvi-car-insurance";
import { CarInsuranceAddOn } from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultPVI",

  data() {
    return {
      pvi: new PviCarInsurance(0, 0),
      insuranceFee: 0
    };
  },

  computed: {
    carValue(): number {
      return this.$store.state.car.carValue;
    },

    carYear(): number {
      return this.$store.state.car.carYear;
    },

    addons(): CarInsuranceAddOn[] {
      return this.$store.state.car.addons;
    }
  },

  watch: {
    carValue(newValue: number) {
      this.pvi.setCarValue(newValue);
      this.calculateCarInsuranceFee();
    },

    carYear(newValue: number) {
      this.pvi.setCarYear(newValue);
      this.calculateCarInsuranceFee();
    },

    addons(newValue: CarInsuranceAddOn[]) {
      this.pvi.setAddons(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.pvi.setCarValue(this.carValue);
    this.pvi.setCarYear(this.carYear);
    this.pvi.setAddons(this.addons);
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
