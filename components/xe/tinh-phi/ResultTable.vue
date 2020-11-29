<template>
  <div class="box">
    <div class="media">
      <div class="media-left">
        <figure class="result-table__logo-container">
          <img
            class="result-table__logo"
            :src="require(`../../../assets/images/${logoFileName}`)"
            :alt="`Logo ${companyName}`"
          />
        </figure>
      </div>

      <div class="media-content">
        <div class="content">
          <h3 class="title">{{ companyName }}</h3>
          <p class="subtitle is-5">
            Phí bảo hiểm: {{ insuranceValue | millionDongs }}
          </p>
        </div>
      </div>

      <div class="media-right">
        <button data-cy="buy-button" class="button is-warning">MUA NGAY</button>
      </div>
    </div>
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
  }
});
</script>

<style lang="scss" scoped>
$logo-max-height: 50px;

.result-table__logo-container {
  width: 150px;
  height: $logo-max-height;
  display: flex;
  align-items: center;
}

.result-table__logo {
  display: block;
  width: auto;
  max-height: $logo-max-height;
}
</style>
