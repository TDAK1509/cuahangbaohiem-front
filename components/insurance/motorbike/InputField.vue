<template>
  <FormField
    :label="label"
    :required="required"
    :class="{ 'input-field--disabled': disabled }"
  >
    <input
      :value="value"
      class="input-field__input"
      v-bind="inputAttributes"
      @input="$emit('input', $event.target.value)"
    />
  </FormField>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InputField",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "input"
  },

  props: {
    value: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      default: "text"
    },

    label: {
      type: String,
      default: "Select label"
    },

    placeholder: {
      type: String,
      default: ""
    },

    pattern: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: ""
    },

    required: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    inputAttributes() {
      const attrs = {
        type: this.type,
        disabled: this.disabled,
        placeholder: this.placeholder,
        required: this.required,
        title: this.title
      };

      if (this.pattern) {
        Object.assign({ pattern: this.pattern }, attrs);
      }

      return attrs;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.input-field--disabled {
  background: rgba($primary, 0.5);
  color: black;

  input {
    color: chocolate;
  }
}

.input-field__input {
  border: none;
  background: none;
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  width: 100%;
}
</style>
