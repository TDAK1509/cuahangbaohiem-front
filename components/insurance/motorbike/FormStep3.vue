<template>
  <div>
    <h3>BƯỚC 3: THÔNG TIN NGƯỜI MUA</h3>
    <form @submit.prevent="submit">
      <TextField
        data-cy="buyer-name-input"
        required
        pattern="[a-zA-Z\s]+"
        title="Tên của bạn có số hoặc kí tự lạ."
      />

      <TextField data-cy="buyer-address-input" required />

      <CityDistrictWard />

      <TextField
        data-cy="buyer-phone-input"
        required
        type="tel"
        pattern="[0][0-9]+"
        title="Định dạng số điện thoại không đúng."
      />

      <TextField data-cy="buyer-email-input" required type="email" />

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
