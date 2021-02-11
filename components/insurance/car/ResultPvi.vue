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
import Pvi from "@/utils/pvi";

const pvi = new Pvi();

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
      thisYear: new Date().getFullYear()
    };
  },

  computed: {
    insuranceValue(): number {
      return pvi.getCarInsuranceValue(this.carValue, this.carYearThreshold);
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
