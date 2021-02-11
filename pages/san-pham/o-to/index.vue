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
          <div class="control" data-cy="car-year">
            <p v-for="{ text, value } in carYearRadios" :key="value">
              <label class="radio">
                <input
                  v-model="carYearInput"
                  :value="value"
                  type="radio"
                  name="car_year"
                />
                {{ text }}
              </label>
            </p>
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
        <ResultPvi class="mb-5" :car-value="carValue" :car-year="carYear" />
        <ResultBaoViet class="mb-5" :car-value="carValue" :car-year="carYear" />
        <ResultBaoMinh class="mb-5" :car-value="carValue" :car-year="carYear" />
        <ResultMic class="mb-5" :car-value="carValue" :car-year="carYear" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TinhPhiOto",

  layout: "calculator",

  data() {
    return {
      showResult: false,
      carValueInput: null as string | null,
      carYearInput: 0,
      carYearRadios: [
        { text: "Dưới 3 năm", value: 0 },
        { text: "Từ 3 đến 6 năm", value: 1 },
        { text: "Từ 6 đến 10 năm", value: 2 }
      ]
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
