<template>
  <div>
    <h3>BƯỚC 4: TÓM TẮT ĐƠN HÀNG</h3>

    <form @submit.prevent="submit">
      <button data-cy="next-button">NEXT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MotorbikeFormStep4",

  inheritAttrs: false,

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
