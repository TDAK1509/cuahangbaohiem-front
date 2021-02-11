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
import BaoViet from "@/utils/insurance-companies/bao-viet";

const baoViet = new BaoViet();

export default Vue.extend({
  name: "ResultbaoViet",

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
      return baoViet.getCarInsuranceValue(this.carValue, this.carYearThreshold);
    }
  }
});
</script>
