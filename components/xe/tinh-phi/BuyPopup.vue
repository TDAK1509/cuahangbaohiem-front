<template>
  <form data-cy="buy-popup">
    <TextField
      v-model="email"
      data-cy="email"
      label="Năm sản xuất"
      placeholder="2015"
      required
      pattern="[0-9]{4}"
      title="Năm sản xuất không hợp lệ."
    />

    <TextField
      v-model="phone"
      data-cy="phone"
      label="Năm sản xuất"
      placeholder="2015"
      required
      pattern="[0-9]{4}"
      title="Năm sản xuất không hợp lệ."
    />

    <TextField
      v-model="note"
      data-cy="note"
      label="Năm sản xuất"
      placeholder="2015"
      required
      pattern="[0-9]{4}"
      title="Năm sản xuất không hợp lệ."
    />

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
  }
};
</script>

<style>
</style>
