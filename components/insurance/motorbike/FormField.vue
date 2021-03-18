<template>
  <div class="form-field">
    <label class="form-field__label">
      {{ label }}
      <span v-if="required" class="form-field__label--required">*</span>
    </label>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormField",

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: "Select label"
    },

    required: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.form-field {
  border: 1px solid var(--clr-border-grey);
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  background: none;
  position: relative;
}

.form-field__label {
  font-weight: 700;
  font-size: 0.8rem;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
  display: block;

  &--required {
    color: red;
  }
}
</style>
