<template>
  <div class="select-field">
    <label class="select-field__label">
      {{ label }}
      <span v-if="required" class="select-field__label--required">*</span>
    </label>

    <select
      class="select-field__select"
      :required="required"
      @change="$emit('change', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :selected="option.value === selected"
      >
        {{ option.text }}
      </option>
    </select>

    <span class="select-field__arrow"></span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface Option {
  value: any;
  text: string;
}

export default Vue.extend({
  name: "SelectField",

  inheritAttrs: false,

  model: {
    prop: "selected",
    event: "change"
  },

  props: {
    selected: {
      type: [String, Number],
      required: false,
      default: ""
    },

    options: {
      type: Array as PropType<Option[]>,
      required: true
    },

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
.select-field {
  border: 1px solid var(--clr-border-grey);
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  background: none;
  position: relative;
}

.select-field__label {
  font-weight: 700;
  font-size: 0.8rem;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
  display: block;

  &--required {
    color: red;
  }
}

.select-field__select {
  width: 100%;
  font-size: 1rem;
  appearance: none;
  border: none;
  background: none;
  padding: 0.8rem 0.5rem;
  padding-right: 4rem;
  color: red;
  outline: none;

  &:focus {
    border-bottom: 2px solid var(--clr-primary);
    margin-bottom: -2px;
  }
}

.select-field__arrow,
.select-field__arrow::before,
.select-field__arrow::after {
  position: absolute;
  top: 0;
  right: 0;
}

.select-field__arrow::before,
.select-field__arrow::after {
  right: 0.5em;
}

.select-field__arrow {
  display: block;
  width: 4rem;
  height: 100%;
  pointer-events: none;

  --size: 0.45rem;

  &::before {
    content: "";
    border-right: var(--size) solid transparent;
    border-left: var(--size) solid transparent;
    border-top: var(--size) solid black;
    top: 72%;
  }

  &::after {
    content: "";
    border-right: var(--size) solid transparent;
    border-left: var(--size) solid transparent;
    border-bottom: var(--size) solid black;
    top: 57%;
  }
}
</style>
