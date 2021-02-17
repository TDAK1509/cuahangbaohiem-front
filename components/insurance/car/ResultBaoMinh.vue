<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-bao-minh.png"
      company-name="Bảo Minh"
      :insurance-value="insuranceValue"
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
      this.baoMinh.setCarValue(newValue);
      this.calculateCarInsuranceValue();
    },

    carYearThreshold(newValue: number) {
      this.baoMinh.setCarYearThreshold(newValue);
      this.calculateCarInsuranceValue();
    },

    addons(newValue: CarInsuranceAddOn[]) {
      this.baoMinh.setAddons(newValue);
      this.calculateCarInsuranceValue();
    }
  },

  mounted() {
    this.baoMinh.setCarValue(this.carValue);
    this.baoMinh.setCarYearThreshold(this.carYearThreshold);
    this.baoMinh.setAddons(this.addons);
    this.calculateCarInsuranceValue();
  },

  methods: {
    calculateCarInsuranceValue() {
      this.insuranceValue = this.baoMinh.getCarInsuranceValue();
    }
  }
});
</script>
