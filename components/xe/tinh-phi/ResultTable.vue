<template>
  <div class="is-flex">
    <div>
      <img
        class="result-table__img"
        :src="require(`../../../assets/images/${logoFileName}`)"
      />
    </div>

    <div class="is-flex-grow-1">
      <h4 class="tile is-child title">{{ companyName }}</h4>
      <p class="tile is-child subtitle">
        {{ insuranceValue | millionDongs }}
      </p>
    </div>

    <div>
      <button data-cy="buy-button" class="button">MUA</button>
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
.result-table__img {
  width: auto;
  height: 80px;
}
</style>
