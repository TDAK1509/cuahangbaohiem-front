<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-bao-viet.png"
      company-name="Bảo Việt"
      :insurance-fee="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaoVietCarInsurance from "@/controller/car-insurance/bao-viet-car-insurance";
import { CarInsuranceAddOn } from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultBaoViet",

  data() {
    return {
      baoViet: new BaoVietCarInsurance(0, 0, CarInsuranceAddOn.NONE),
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
      this.baoViet.setCarValue(newValue);
      this.calculateCarInsuranceFee();
    },

    carYear(newValue: number) {
      this.baoViet.setCarYear(newValue);
      this.calculateCarInsuranceFee();
    },

    addon(newValue: CarInsuranceAddOn) {
      this.baoViet.setAddon(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.baoViet.setCarValue(this.carValue);
    this.baoViet.setCarYear(this.carYear);
    this.baoViet.setAddon(this.addon);
    this.calculateCarInsuranceFee();
  },

  methods: {
    calculateCarInsuranceFee() {
      this.insuranceFee = this.baoViet.getInsuranceFee();
    }
  }
});
</script>
