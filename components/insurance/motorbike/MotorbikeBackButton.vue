<template>
  <button
    class="motorbike-next-button button is-uppercase is-primary"
    data-cy="back-button"
    type="button"
    @click="$emit('click')"
  >
    &lt; Quay lại
  </button>
</template>

<script>
export default {
  name: "MotorbikeBackButton",
  inheritAttrs: false
};
</script>

<style lang="scss" scoped>
.motorbike-next-button {
  margin-left: auto;
}
</style>
