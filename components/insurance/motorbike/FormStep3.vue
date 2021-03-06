<template>
  <div>
    <h3>BƯỚC 3: THÔNG TIN XE</h3>
    <form @submit.prevent="submit">
      <TextField
        data-cy="owner-input"
        required
        pattern="[a-zA-Z\s]+"
        title="Tên của bạn có số hoặc kí tự lạ."
      />
      <TextField
        data-cy="license-plate-input"
        required
        pattern="[0-9]{2}[A-Z][0-9]-[0-9]{4,5}"
        title="Điền biển số xe theo mẫu: 55Z5-1234 hoặc 66Z6-123456."
      />

      <button data-cy="next-button">NEXT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MotorbikeFormStep3",

  inheritAttrs: false,

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
