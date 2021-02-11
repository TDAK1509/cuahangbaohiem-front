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

export default Vue.extend({
  name: "ResultPVI",

  props: {
    carValue: {
      type: Number,
      required: true
    },

    carYearThreshold: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      pvi: new PviCarInsurance(this.carValue, this.carYearThreshold, [])
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
