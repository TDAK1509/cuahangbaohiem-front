<template>
  <div class="field">
    <label class="label">{{ label }}</label>

    <div class="control" :class="{ 'has-icons-right': isError }">
      <input
        :value="value"
        class="input"
        :class="{ 'is-danger': isError }"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
      />

      <span v-if="isError" class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>

    <p v-if="isError" data-cy="error-message" class="help is-danger">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TextField",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "input"
  },

  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ""
    },

    label: {
      type: String,
      required: false,
      default: ""
    },

    isError: {
      type: Boolean,
      required: false,
      default: false
    },

    errorMessage: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
