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
import BaoMinh from "@/utils/insurance-companies/bao-minh";

const baoMinh = new BaoMinh();

export default Vue.extend({
  name: "ResultbaoMinh",

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

  computed: {
    insuranceValue(): number {
      return baoMinh.getCarInsuranceValue(this.carValue, this.carYearThreshold);
    }
  }
});
</script>
