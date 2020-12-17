<template>
  <div class="home-rounded-button">{{ label }}</div>
</template>

<script>
export default {
  name: "HomeRoundedButton",

  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors";

.home-rounded-button {
  border-radius: 50%;
  border: 2px solid $grey;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
