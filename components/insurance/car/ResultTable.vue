<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <h3 class="title is-size-4">{{ companyName }}</h3>
          </div>

          <div class="media-content">
            <figure class="image">
              <img
                class="result-table__logo"
                :src="require(`../../../assets/images/${logoFileName}`)"
                :alt="`Logo ${companyName}`"
              />
            </figure>
          </div>
        </div>

        <div class="content">
          <p>Phí bảo hiểm: {{ insuranceValue | millionDongs }}</p>
        </div>

        <div>
          <button
            data-cy="buy-button"
            class="button is-warning"
            @click="showPopup = true"
          >
            MUA NGAY
          </button>
        </div>
      </div>
    </div>

    <BuyPopup
      v-if="showPopup"
      v-model="showPopup"
      :insurance-company="companyName"
      :insurance-value="insuranceValue"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ResultTable",

  filters: {
    millionDongs(value: number): string {
      return (value * 1000000).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND"
      });
    }
  },

  props: {
    logoFileName: {
      type: String,
      required: false,
      default: ""
    },

    companyName: {
      type: String,
      required: false,
      default: ""
    },

    insuranceValue: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      showPopup: false
    };
  }
});
</script>

<style lang="scss" scoped>
.result-table__logo {
  display: block;
  width: auto;
  max-height: 30px;
}
</style>
