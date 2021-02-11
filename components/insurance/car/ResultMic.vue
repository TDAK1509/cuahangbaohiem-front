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
import MicCarInsurance from "@/utils/car-insurance/mic-car-insurance";
import { CarYearThreshold, CarInsuranceAddOn } from "@/utils/car-insurance/car";

export default Vue.extend({
  name: "ResultMic",

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
      mic: new MicCarInsurance(
        this.carValue,
        this.carYearThreshold,
        this.addons
      )
    };
  },

  computed: {
    insuranceValue(): number {
      return this.mic.getCarInsuranceValue();
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
