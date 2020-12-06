<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card" data-cy="buy-popup">
      <header class="modal-card-head has-background-info">
        <p class="modal-card-insuranceCompany has-text-white bold">
          {{ insuranceCompany }}: {{ insuranceValue }}
        </p>
        <button class="delete" data-cy="popup-cancel-button" @click="close" />
      </header>

      <section class="modal-card-body">
        <BuyPopupForm
          :insurance-company="insuranceCompany"
          :insurance-value="insuranceValue"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BuyPopup",

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
      required: false,
      default: ""
    },

    insuranceValue: {
      type: String,
      required: false,
      default: ""
    }
  },

  methods: {
    close() {
      this.$emit("input", false);
    }
  }
});
</script>
