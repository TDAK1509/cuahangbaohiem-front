<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-mic.png"
      company-name="MIC"
      :insurance-value="insuranceValue"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mic from "@/utils/insurance-companies/mic";

const mic = new Mic();

export default Vue.extend({
  name: "Resultmic",

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
      return mic.getCarInsuranceValue(this.carValue, this.carYearThreshold);
    }
  }
});
</script>

<style lang="scss" scoped>
.result-mic__img {
  width: auto;
  height: 80px;
}
</style>
