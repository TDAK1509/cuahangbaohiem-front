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
          <p>Phí bảo hiểm: {{ insuranceFee | toVnd }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import mixinMoneyFilter from "@/utils/mixins/money-filters";

export default Vue.extend({
  name: "ResultTable",

  mixins: [mixinMoneyFilter],

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

    insuranceFee: {
      type: Number,
      required: false,
      default: 0
    }
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
