<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-bao-viet.png"
      company-name="Bảo Việt"
      :insurance-value="insuranceValue"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaoVietCarInsurance from "@/utils/car-insurance/bao-viet-car-insurance";
import { CarYearThreshold, CarInsuranceAddOn } from "@/utils/car-insurance/car";

export default Vue.extend({
  name: "ResultBaoViet",

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
      baoViet: new BaoVietCarInsurance(
        this.carValue,
        this.carYearThreshold,
        this.addons
      )
    };
  },

  computed: {
    insuranceValue(): number {
      return this.baoViet.getCarInsuranceValue();
    }
  }
});
</script>
