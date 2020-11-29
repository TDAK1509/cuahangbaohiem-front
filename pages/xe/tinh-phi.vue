<template>
  <div class="container">
    <div class="columns">
      <form class="column" @submit.prevent="calculate">
        <TextField
          v-model="carValue"
          data-cy="car-value"
          label="Giá trị xe (triệu đồng)"
          :is-error="isErrorCarValue"
          :error-message="carValueErrorMessage"
          placeholder="800"
          required
        />

        <TextField
          v-model="carYear"
          data-cy="car-year"
          label="Năm sản xuất"
          :is-error="isErrorCarYear"
          :error-message="carYearErrorMessage"
          placeholder="2015"
          required
        />

        <button data-cy="calculate-button">TÍNH PHÍ</button>
      </form>

      <div class="column">
        <div v-if="showResult" data-cy="result">
          <ResultPvi :car-value="carValue" :car-year="carYear" />
          <ResultBaoViet />
          <ResultBaoMinh />
          <ResultMic />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextField from "@/components/TextField.vue";
import ResultPvi from "@/components/xe/tinh-phi/ResultPvi.vue";
import ResultBaoViet from "@/components/xe/tinh-phi/ResultBaoViet.vue";
import ResultBaoMinh from "@/components/xe/tinh-phi/ResultBaoMinh.vue";
import ResultMic from "@/components/xe/tinh-phi/ResultMic.vue";

const ERROR_NOT_A_NUMBER = "Vui lòng điền một con số.";

export default Vue.extend({
  name: "TinhPhiXe",

  components: {
    TextField,
    ResultPvi,
    ResultBaoViet,
    ResultBaoMinh,
    ResultMic
  },

  data() {
    return {
      showResult: false,

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
      } else {
        this.isErrorCarValue = false;
        this.carValueErrorMessage = "";
      }

      if (!this.carYearIsNumber) {
        this.isErrorCarYear = true;
        this.carYearErrorMessage = ERROR_NOT_A_NUMBER;
      } else {
        this.isErrorCarYear = false;
        this.carYearErrorMessage = "";
      }

      if (!this.isFormValid) {
        return;
      }

      this.showResult = true;
    }
  }
});
</script>
