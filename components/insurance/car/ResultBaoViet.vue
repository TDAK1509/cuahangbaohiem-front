<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-bao-viet.png"
      company-name="Bảo Việt"
      :insurance-value="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaoVietCarInsurance from "@/controller/car-insurance/bao-viet-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultBaoViet",

  data() {
    return {
      baoViet: new BaoVietCarInsurance(
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
      this.baoViet.setCarValue(newValue);
      this.calculateCarInsuranceFee();
    },

    carYearThreshold(newValue: number) {
      this.baoViet.setCarYearThreshold(newValue);
      this.calculateCarInsuranceFee();
    },

    addon(newValue: CarInsuranceAddOn) {
      this.baoViet.setAddon(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.baoViet.setCarValue(this.carValue);
    this.baoViet.setCarYearThreshold(this.carYearThreshold);
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
