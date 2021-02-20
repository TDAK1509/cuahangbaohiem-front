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
      pvi: new PviCarInsurance(0, 0, CarInsuranceAddOn.NONE),
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

    addon(): CarInsuranceAddOn {
      return this.$store.state.car.addon;
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

    addon(newValue: CarInsuranceAddOn) {
      this.pvi.setAddon(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.pvi.setCarValue(this.carValue);
    this.pvi.setCarYear(this.carYear);
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
