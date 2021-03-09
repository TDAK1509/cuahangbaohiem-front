<template>
  <button
    class="button is-uppercase is-primary has-text-weight-bold"
    data-cy="back-button"
    type="button"
    @click="$emit('click')"
  >
    <span class="arrow">&lt;</span>
    Quay lại
  </button>
</template>

<script>
export default {
  name: "MotorbikeBackButton",
  inheritAttrs: false
};
</script>

<style lang="scss" scoped>
.arrow {
  transform: scale(1, 1.5);
  font-size: 0.8rem;
  display: block;
  position: relative;
  top: -0.15rem;
  right: 0.4rem;
}
</style>
