<template>
  <div class="select-field">
    <label class="select-field__label">
      Select label
      <span class="select-field__label--required">*</span>
    </label>

    <select ref="select" class="select-field__select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>

    <span class="select-field__arrow"></span>
  </div>
</template>

<script>
export default {
  name: "SelectField",
  methods: {
    clickSelect() {
      this.$refs.select.click();
    }
  }
};
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
  padding: 0.5rem 0.5rem;
  color: red;
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
    top: 70%;
  }

  &::after {
    content: "";
    border-right: var(--size) solid transparent;
    border-left: var(--size) solid transparent;
    border-bottom: var(--size) solid black;
    top: 55%;
  }
}
</style>
