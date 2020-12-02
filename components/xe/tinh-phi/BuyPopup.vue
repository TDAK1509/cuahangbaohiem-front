<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <form data-cy="buy-popup" @submit.prevent="submit">
          <TextField
            v-model="email"
            data-cy="email"
            type="email"
            name="email"
            required
          />

          <TextField
            v-model="phone"
            data-cy="phone"
            type="tel"
            name="phone"
            pattern="^[0-9]*$"
            required
          />

          <TextField v-model="note" data-cy="note" />

          <div>
            <button
              data-cy="popup-cancel-button"
              class="button is-warning"
              type="button"
              @click="close"
            >
              X
            </button>
            <button data-cy="popup-buy-button" class="button is-warning">
              MUA NGAY
            </button>
          </div>
        </form>
      </div>
    </div>

    <button class="modal-close is-large" @click="close"></button>
  </div>
</template>

<script>
export default {
  name: "BuyPopup",

  model: {
    prop: "show",
    event: "input"
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      email: "",
      phone: "",
      note: ""
    };
  },

  methods: {
    submit() {
      console.log("submit");
    },

    close() {
      this.$emit("input", false);
    }
  }
};
</script>

<style>
</style>
