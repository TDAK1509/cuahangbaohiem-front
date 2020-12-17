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

$button-size: 160px;

.home-rounded-button {
  border-radius: 50%;
  border: 2px solid $grey;
  width: $button-size;
  height: $button-size;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.7rem;
}
</style>
