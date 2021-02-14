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
import BaoMinhCarInsurance from "@/utils/car-insurance/bao-minh-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance-request";

export default Vue.extend({
  name: "ResultBaoMinh",

  props: {
    carValue: {
      type: Number,
      required: true
    },

    carYearThreshold: {
      type: Number as () => CarYearThreshold,
      required: true
    },

    addons: {
      type: Array as () => CarInsuranceAddOn[],
      required: true
    }
  },

  data() {
    return {
      baoMinh: new BaoMinhCarInsurance(
        this.carValue,
        this.carYearThreshold,
        this.addons
      ),
      insuranceValue: 0
    };
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
    this.calculateCarInsuranceValue();
  },

  methods: {
    calculateCarInsuranceValue() {
      this.insuranceValue = this.baoMinh.getCarInsuranceValue();
    }
  }
});
</script>
