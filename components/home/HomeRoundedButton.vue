<template>
  <nuxt-link class="home-rounded-button" :to="to">
    <div>
      <span class="icon is-large" :class="iconColorClass">
        <i :class="iconFinalClasses" />
      </span>
    </div>

    <p class="is-size-7">{{ label }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";
import { MOBILE_BREAKPOINT } from "@/utils/breakpoint";

export default Vue.extend({
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
    },

    iconColorClass: {
      type: String,
      default: ""
    }
  },

  computed: {
    iconFinalClasses(): string {
      const sizeClass = this.isMobile ? "fa-2x" : "fa-3x";
      return `${sizeClass} ${this.iconClass}`;
    },

    isMobile(): boolean {
      return window.innerWidth <= MOBILE_BREAKPOINT;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors";
@import "~assets/scss/_breakpoints";

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

@media only screen and (max-width: $mobile) {
  $button-size-mobile: 120px;

  .home-rounded-button {
    width: $button-size-mobile;
    height: $button-size-mobile;
  }
}
</style>
