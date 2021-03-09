<template>
  <button
    class="motorbike-next-button button is-uppercase is-primary has-text-weight-bold"
    data-cy="next-button"
  >
    Tiếp tục
    <span class="arrow">&gt;</span>
  </button>
</template>

<script>
export default {
  name: "MotorbikeNextButton"
};
</script>

<style lang="scss" scoped>
.motorbike-next-button {
  margin-left: auto;
}

.arrow {
  transform: scale(1, 1.5);
  font-size: 0.8rem;
  display: block;
  position: relative;
  top: -0.15rem;
  left: 0.4rem;
}
</style>
