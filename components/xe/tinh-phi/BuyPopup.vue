<template>
  <form data-cy="buy-popup" @submit.prevent="submit">
    <TextField v-model="email" data-cy="email" type="email" required />

    <TextField v-model="phone" data-cy="phone" required />

    <TextField v-model="note" data-cy="note" required />

    <div>
      <button data-cy="cancel-button" class="button is-warning">X</button>
      <button data-cy="buy-button" class="button is-warning">MUA NGAY</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "BuyPopup",

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
    }
  }
};
</script>

<style>
</style>
