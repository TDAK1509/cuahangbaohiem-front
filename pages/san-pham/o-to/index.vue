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
          v-model="carValue"
          data-cy="car-value"
          label="Giá trị xe (VND)"
          placeholder="800000000"
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
          pattern="[0-9]*"
          minlength="4"
          maxlength="4"
          title="Năm sản xuất không hợp lệ."
        />

        <div class="field">
          <label class="label">Điều kiện bổ sung</label>

          <div class="control" data-cy="addons">
            <p v-for="item in addonCheckboxes" :key="item.value">
              <label class="checkbox">
                <input v-model="addons" type="checkbox" :value="item.value" />
                {{ item.text }}
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
        v-if="showResult"
        ref="result"
        class="mt-5 pt-5 tinh-phi__result"
        data-cy="result"
      >
        <ResultPvi class="mb-5" />
        <ResultBaoViet class="mb-5" />
        <ResultBaoMinh class="mb-5" />
        <ResultMic class="mb-5" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import CarInsuranceRequestController, {
  CarInsuranceAddOn
} from "@/controller/car-insurance/car-insurance-request";

const controller = new CarInsuranceRequestController();

export default Vue.extend({
  name: "TinhPhiOto",

  layout: "calculator",

  data() {
    return {
      showResult: false,
      addonCheckboxes: controller.getAddOnCheckboxes()
    };
  },

  computed: {
    carValue: {
      get(): string {
        return this.$store.state.car.carValue
          ? this.$store.state.car.carValue.toString()
          : "";
      },
      set(newValue: string) {
        this.$store.dispatch("car/setCarValue", parseInt(newValue));
      }
    },

    carYear: {
      get(): string {
        return this.$store.state.car.carYear
          ? this.$store.state.car.carYear.toString()
          : "";
      },
      set(newValue: string) {
        this.$store.dispatch("car/setCarYear", parseInt(newValue));
      }
    },

    addons: {
      get(): CarInsuranceAddOn[] {
        return this.$store.state.car.addons;
      },
      set(newValue: CarInsuranceAddOn[]) {
        this.$store.dispatch("car/setAddons", newValue);
      }
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
