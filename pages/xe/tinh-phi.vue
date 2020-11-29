<template>
  <div class="container">
    <div class="columns">
      <form class="column" @submit.prevent="calculate">
        <TextField
          v-model="carValue"
          data-cy="car-value"
          label="Giá trị xe (triệu đồng)"
          placeholder="800"
          required
          pattern="[0-9]*"
          title="Vui lòng điền một con số."
        />

        <TextField
          v-model="carYear"
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
      carYear: null as string | null
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

      this.showResult = true;
    }
  }
});
</script>
