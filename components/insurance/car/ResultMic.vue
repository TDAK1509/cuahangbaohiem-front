<template>
  <div data-cy="insurance-result">
    <ResultTable
      logo-file-name="logo-mic.png"
      company-name="MIC"
      :insurance-value="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MicCarInsurance from "@/controller/car-insurance/mic-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultMic",

  data() {
    return {
      mic: new MicCarInsurance(
        0,
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS,
        CarInsuranceAddOn.BASIC
      ),
      insuranceFee: 0
    };
  },

  computed: {
    carValue(): number {
      return this.$store.state.car.carValue;
    },

    carYearThreshold(): CarYearThreshold {
      return this.$store.state.car.carYearThreshold;
    },

    addon(): CarInsuranceAddOn {
      return this.$store.state.car.addon;
    }
  },

  watch: {
    carValue(newValue: number) {
      this.mic.setCarValue(newValue);
      this.calculateCarInsuranceFee();
    },

    carYearThreshold(newValue: number) {
      this.mic.setCarYearThreshold(newValue);
      this.calculateCarInsuranceFee();
    },

    addon(newValue: CarInsuranceAddOn) {
      this.mic.setAddon(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.mic.setCarValue(this.carValue);
    this.mic.setCarYearThreshold(this.carYearThreshold);
    this.mic.setAddon(this.addon);
    this.calculateCarInsuranceFee();
  },

  methods: {
    calculateCarInsuranceFee() {
      this.insuranceFee = this.mic.getInsuranceFee();
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
