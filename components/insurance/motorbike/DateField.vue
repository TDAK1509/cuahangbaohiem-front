<template>
  <div class="date-field">
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
    }
  }
});
</script>

<style lang="scss" scoped>
.date-field {
  border: 1px solid var(--clr-border-grey);
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  background: none;
  position: relative;
}

.date-field__label {
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
