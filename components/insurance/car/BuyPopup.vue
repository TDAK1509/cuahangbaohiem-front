<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card" data-cy="buy-popup">
      <header class="modal-card-head has-background-info">
        <p class="modal-card-title has-text-white bold">
          {{ insuranceCompany }}: {{ insuranceFee | millionDongs }}
        </p>
        <button class="delete" data-cy="popup-cancel-button" @click="close" />
      </header>

      <section class="modal-card-body">
        <BuyPopupForm
          :insurance-company="insuranceCompany"
          :insurance-fee="insuranceFee"
          @esc="close"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import mixinMoneyFilter from "@/utils/mixins/money-filters";

export default Vue.extend({
  name: "BuyPopup",

  mixins: [mixinMoneyFilter],

  model: {
    prop: "show",
    event: "input"
  },

  props: {
    show: {
      type: Boolean,
      default: false
    },

    insuranceCompany: {
      type: String,
      required: true
    },

    insuranceFee: {
      type: Number,
      required: true
    }
  },

  methods: {
    close() {
      this.$emit("input", false);
    }
  }
});
</script>
