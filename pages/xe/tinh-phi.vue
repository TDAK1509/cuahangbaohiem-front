<template>
  <div>
    <input v-model="carValue" data-cy="car-value" />
    <p v-if="isErrorCarValue" class="tinh-phi__error">
      {{ carValueErrorMessage }}
    </p>

    <input v-model="carYear" data-cy="car-year" />
    <p v-if="isErrorCarYear" class="tinh-phi__error">
      {{ carYearErrorMessage }}
    </p>

    <button data-cy="calculate-button" @click="calculate">TÍNH PHÍ</button>

    <div v-if="hasResult" data-cy="result">
      <ResultPvi />
      <ResultBaoViet />
      <ResultBaoMinh />
      <ResultMic />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ResultPvi from "@/components/xe/tinh-phi/ResultPvi.vue";
import ResultBaoViet from "@/components/xe/tinh-phi/ResultBaoViet.vue";
import ResultBaoMinh from "@/components/xe/tinh-phi/ResultBaoMinh.vue";
import ResultMic from "@/components/xe/tinh-phi/ResultMic.vue";

const ERROR_NOT_A_NUMBER = "Vui lòng điền một con số.";

export default Vue.extend({
  name: "TinhPhiXe",

  components: {
    ResultPvi,
    ResultBaoViet,
    ResultBaoMinh,
    ResultMic
  },

  data() {
    return {
      hasResult: false,

      carValue: null as string | null,
      isErrorCarValue: false,
      carValueErrorMessage: "",

      carYear: null as string | null,
      isErrorCarYear: false,
      carYearErrorMessage: ""
    };
  },

  computed: {
    carValueIsNumber(): boolean {
      if (!this.carValue) return false;
      const carValue = parseInt(this.carValue);
      return Number.isInteger(carValue);
    },

    carYearIsNumber(): boolean {
      if (!this.carYear) return false;
      const carYear = parseInt(this.carYear);
      return Number.isInteger(carYear);
    },

    isFormValid(): boolean {
      return this.carValueIsNumber && this.carYearIsNumber;
    }
  },

  methods: {
    calculate() {
      if (!this.carValue || !this.carYear) {
        return;
      }

      if (!this.carValueIsNumber) {
        this.isErrorCarValue = true;
        this.carValueErrorMessage = ERROR_NOT_A_NUMBER;
      }

      if (!this.carYearIsNumber) {
        this.isErrorCarYear = true;
        this.carYearErrorMessage = ERROR_NOT_A_NUMBER;
      }

      if (!this.isFormValid) {
        return;
      }

      this.hasResult = true;
    }
  }
});
</script>

<style>
</style>
