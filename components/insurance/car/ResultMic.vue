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
import { CarInsuranceAddOn } from "@/controller/car-insurance/car-insurance-request";

export default Vue.extend({
  name: "ResultMic",

  data() {
    return {
      mic: new MicCarInsurance(0, 0, CarInsuranceAddOn.BASIC),
      insuranceFee: 0
    };
  },

  computed: {
    carValue(): number {
      return this.$store.state.car.carValue;
    },

    carYear(): number {
      return this.$store.state.car.carYear;
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

    carYear(newValue: number) {
      this.mic.setCarYear(newValue);
      this.calculateCarInsuranceFee();
    },

    addon(newValue: CarInsuranceAddOn) {
      this.mic.setAddon(newValue);
      this.calculateCarInsuranceFee();
    }
  },

  mounted() {
    this.mic.setCarValue(this.carValue);
    this.mic.setCarYear(this.carYear);
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
