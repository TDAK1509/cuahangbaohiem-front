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
import BaoVietCarInsurance from "@/utils/car-insurance/bao-viet-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance-request";

export default Vue.extend({
  name: "ResultBaoViet",

  data() {
    return {
      baoViet: new BaoVietCarInsurance(
        0,
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS,
        []
      ),
      insuranceValue: 0
    };
  },

  computed: {
    carValue(): number {
      return this.$store.state.car.carValue;
    },

    carYearThreshold(): CarYearThreshold {
      return this.$store.state.car.carYearThreshold;
    },

    addons(): CarInsuranceAddOn[] {
      return this.$store.state.car.addons;
    }
  },

  watch: {
    carValue(newValue: number) {
      this.baoViet.setCarValue(newValue);
      this.calculateCarInsuranceValue();
    },

    carYearThreshold(newValue: number) {
      this.baoViet.setCarYearThreshold(newValue);
      this.calculateCarInsuranceValue();
    },

    addons(newValue: CarInsuranceAddOn[]) {
      this.baoViet.setAddons(newValue);
      this.calculateCarInsuranceValue();
    }
  },

  mounted() {
    this.baoViet.setCarValue(this.carValue);
    this.baoViet.setCarYearThreshold(this.carYearThreshold);
    this.baoViet.setAddons(this.addons);
    this.calculateCarInsuranceValue();
  },

  methods: {
    calculateCarInsuranceValue() {
      this.insuranceValue = this.baoViet.getCarInsuranceValue();
    }
  }
});
</script>
