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

export default Vue.extend({
  name: "ResultBaoMinh",

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
      baoMinh: new BaoMinhCarInsurance(this.carValue, this.carYearThreshold, [])
    };
  },

  computed: {
    insuranceValue(): number {
      return this.baoMinh.getCarInsuranceValue();
    }
  }
});
</script>
