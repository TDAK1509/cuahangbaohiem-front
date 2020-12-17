<template>
  <nuxt-link class="home-rounded-button" :to="to">
    <div>
      <span class="icon is-large">
        <i class="fa-3x" :class="iconClass" />
      </span>
    </div>

    <p class="is-size-7">{{ label }}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: "HomeRoundedButton",

  props: {
    to: {
      type: String,
      default: ""
    },

    label: {
      type: String,
      default: ""
    },

    iconClass: {
      type: String,
      default: "fas fa-car"
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.7rem;
  color: $grey-darker;

  &:hover {
    color: $primary;
  }
}
</style>
