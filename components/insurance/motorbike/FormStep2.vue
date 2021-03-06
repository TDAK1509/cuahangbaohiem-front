<template>
  <div>
    <h3>BƯỚC 2: THÔNG TIN XE</h3>
    <form @submit.prevent="submit">
      <TextField data-cy="owner-input" required />
      <TextField data-cy="license-plate-input" required />

      <button data-cy="next-button">NEXT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MotorbikeFormStep2",

  inheritAttrs: false,

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
