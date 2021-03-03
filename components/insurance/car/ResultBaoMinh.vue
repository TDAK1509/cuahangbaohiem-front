<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-bao-minh.png"
      company-name="Bảo Minh"
      :insurance-fee="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaoMinhCarInsurance from "@/controller/car-insurance/bao-minh-car-insurance";
import { CarInsuranceAddOn } from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultBaoMinh",

  data() {
    return {
      baoMinh: new BaoMinhCarInsurance(0, 0),
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
      this.baoMinh.setCarValue(newValue);
      this.calculateCarInsuranceFee();
    },

    carYear(newValue: number) {
      this.baoMinh.setCarYear(newValue);
      this.calculateCarInsuranceFee();
    },

    addons(newValue: CarInsuranceAddOn[]) {
      this.baoMinh.setAddons(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.baoMinh.setCarValue(this.carValue);
    this.baoMinh.setCarYear(this.carYear);
    this.baoMinh.setAddons(this.addons);
    this.calculateCarInsuranceFee();
  },

  methods: {
    calculateCarInsuranceFee() {
      this.insuranceFee = this.baoMinh.getInsuranceFee();
    }
  }
});
</script>
