<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-pvi.png"
      company-name="PVI"
      :insurance-value="insuranceValue"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PviCarInsurance from "@/utils/car-insurance/pvi-car-insurance";
import { CarYearThreshold, CarInsuranceAddOn } from "@/utils/car-insurance/car";

export default Vue.extend({
  name: "ResultPVI",

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
      pvi: new PviCarInsurance(
        this.carValue,
        this.carYearThreshold,
        this.addons
      )
    };
  },

  computed: {
    insuranceValue(): number {
      return this.pvi.getCarInsuranceValue();
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
