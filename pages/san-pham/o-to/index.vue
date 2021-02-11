<router>
{
  name: "tinh-phi_o-to"
}
</router>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-flex is-align-items-center">
        <span class="icon mr-4">
          <i class="fas fa-car" />
        </span>

        <span>Bảo hiểm ô tô</span>
      </h1>

      <form @submit.prevent="calculate">
        <TextField
          v-model="carValueInput"
          data-cy="car-value"
          label="Giá trị xe (triệu đồng)"
          placeholder="800"
          required
          pattern="[0-9]*"
          title="Vui lòng điền một con số."
        />

        <div class="field">
          <label class="label">Năm sản xuất</label>
          <div class="control" data-cy="car-year-threshold">
            <p v-for="{ text, value } in carYearRadios" :key="value">
              <label class="radio">
                <input
                  v-model="carYearThreshold"
                  :value="value"
                  type="radio"
                  name="car_year"
                />
                {{ text }}
              </label>
            </p>
          </div>
        </div>

        <div class="field">
          <label class="label">Năm sản xuất</label>

          <div class="control" data-cy="addons">
            <label class="checkbox">
              <input type="checkbox" />
              Remember me
            </label>
          </div>
        </div>

        <div class="field mt-5">
          <div class="control">
            <button data-cy="calculate-button" class="button is-primary">
              TÍNH PHÍ
            </button>
          </div>
        </div>
      </form>

      <div
        v-if="showResult && isFormValid"
        ref="result"
        class="mt-5 pt-5 tinh-phi__result"
        data-cy="result"
      >
        <ResultPvi
          class="mb-5"
          :car-value="carValue"
          :car-year-threshold="carYearThreshold"
        />
        <ResultBaoViet
          class="mb-5"
          :car-value="carValue"
          :car-year-threshold="carYearThreshold"
        />
        <ResultBaoMinh
          class="mb-5"
          :car-value="carValue"
          :car-year-threshold="carYearThreshold"
        />
        <ResultMic
          class="mb-5"
          :car-value="carValue"
          :car-year-threshold="carYearThreshold"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { CarYearThreshold } from "@/utils/car-insurance/car";

export default Vue.extend({
  name: "TinhPhiOto",

  layout: "calculator",

  data() {
    return {
      showResult: false,
      carValueInput: null as string | null,
      carYearThreshold: CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS,
      carYearRadios: [
        {
          text: "Dưới 3 năm",
          value: CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
        },
        { text: "Từ 3 đến 6 năm", value: CarYearThreshold.FROM_3_TO_6_YEARS },
        { text: "Từ 6 đến 10 năm", value: CarYearThreshold.OVER_6_YEARS }
      ]
    };
  },

  computed: {
    carValueIsNumber(): boolean {
      if (!this.carValueInput) return false;
      const carValue = parseInt(this.carValueInput);
      return Number.isInteger(carValue);
    },

    isFormValid(): boolean {
      return this.carValueIsNumber;
    },

    carValue(): number {
      return this.carValueIsNumber ? parseInt(this.carValueInput as string) : 0;
    }
  },

  methods: {
    calculate() {
      this.showResult = true;
      this.scrollToResultDOM();
    },

    scrollToResultDOM() {
      Vue.nextTick().then(() => {
        const resultDOM = this.$refs.result as Element;
        resultDOM.scrollIntoView({ behavior: "smooth" });
      });
    }
  },

  head() {
    return {
      title: "Tính phí ô tô | Cửa hàng bảo hiểm"
    };
  }
});
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";

.tinh-phi__result {
  border-top: 1px solid $grey-lighter;
}
</style>
