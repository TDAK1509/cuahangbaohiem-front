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
.home-rounded-button-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
