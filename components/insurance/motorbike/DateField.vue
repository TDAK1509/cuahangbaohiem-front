<template>
  <div class="date-fiel">
    <label class="date-field__label">
      {{ label }}
      <span class="date-field__label--required">*</span>
    </label>

    <DatePicker
      :value="date"
      format="DD-MM-YYYY"
      :clearable="false"
      :editable="false"
      :disabled-date="disabledDate"
      :disabled="disabled"
      @input="$emit('change', $event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default Vue.extend({
  name: "DateField",

  components: { DatePicker },

  model: {
    prop: "date",
    event: "change"
  },

  props: {
    date: {
      type: Date,
      default: () => new Date()
    },

    label: {
      type: String,
      default: "Label"
    },

    disabledDate: {
      type: Function,
      default: () => {}
    },

    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss">
.date-field__label {
  font-weight: 700;
  font-size: 0.8rem;
  margin-left: 0.1rem;
  margin-bottom: 0.5rem;
  display: block;

  &--required {
    color: red;
  }
}

.mx-datepicker {
  width: 100%;
}

.mx-input:disabled {
  color: black !important;
}
</style>
