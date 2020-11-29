<template>
  <div class="container">
    <div class="columns">
      <form class="column" @submit.prevent="calculate">
        <TextField
          v-model="carValueInput"
          data-cy="car-value"
          label="Giá trị xe (triệu đồng)"
          placeholder="800"
          required
          pattern="[0-9]*"
          title="Vui lòng điền một con số."
        />

        <TextField
          v-model="carYearInput"
          data-cy="car-year"
          label="Năm sản xuất"
          placeholder="2015"
          required
          pattern="[0-9]{4}"
          title="Năm sản xuất không hợp lệ."
        />

        <div class="field">
          <div class="control">
            <button data-cy="calculate-button" class="button is-primary">
              TÍNH PHÍ
            </button>
          </div>
        </div>
      </form>

      <div class="column">
        <div v-if="showResult && isFormValid" data-cy="result">
          <ResultPvi :car-value="carValue" :car-year="carYear" />
          <ResultBaoViet :car-value="carValue" :car-year="carYear" />
          <ResultBaoMinh :car-value="carValue" :car-year="carYear" />
          <ResultMic :car-value="carValue" :car-year="carYear" />
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
      carValueInput: null as string | null,
      carYearInput: null as string | null
    };
  },

  computed: {
    carValueIsNumber(): boolean {
      if (!this.carValueInput) return false;
      const carValue = parseInt(this.carValueInput);
      return Number.isInteger(carValue);
    },

    carYearIsNumber(): boolean {
      if (!this.carYearInput) return false;
      const carYear = parseInt(this.carYearInput);
      return Number.isInteger(carYear);
    },

    isFormValid(): boolean {
      return this.carValueIsNumber && this.carYearIsNumber;
    },

    carValue(): number {
      return this.carValueIsNumber ? parseInt(this.carValueInput as string) : 0;
    },

    carYear(): number {
      return this.carYearIsNumber ? parseInt(this.carYearInput as string) : 0;
    }
  },

  methods: {
    calculate() {
      this.showResult = true;
    }
  }
});
</script>
