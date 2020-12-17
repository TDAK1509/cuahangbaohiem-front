<template>
  <div class="home-rounded-button-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "HomeRoundedButtonContainer"
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_breakpoints";

.home-rounded-button-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 3rem;
  max-width: 900px;
  margin: auto;
}

@media only screen and (max-width: $mobile) {
  .home-rounded-button-container {
    grid-template-columns: 1fr 1fr;
    row-gap: 1.5rem;
  }
}
</style>
