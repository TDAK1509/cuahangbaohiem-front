<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-bao-minh.png"
      company-name="Bảo Minh"
      :insurance-value="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaoMinhCarInsurance from "@/controller/car-insurance/bao-minh-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultBaoMinh",

  data() {
    return {
      baoMinh: new BaoMinhCarInsurance(
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
      this.baoMinh.setCarValue(newValue);
      this.calculateCarInsuranceFee();
    },

    carYearThreshold(newValue: number) {
      this.baoMinh.setCarYearThreshold(newValue);
      this.calculateCarInsuranceFee();
    },

    addon(newValue: CarInsuranceAddOn) {
      this.baoMinh.setAddon(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.baoMinh.setCarValue(this.carValue);
    this.baoMinh.setCarYearThreshold(this.carYearThreshold);
    this.baoMinh.setAddon(this.addon);
    this.calculateCarInsuranceFee();
  },

  methods: {
    calculateCarInsuranceFee() {
      this.insuranceFee = this.baoMinh.getInsuranceFee();
    }
  }
});
</script>
