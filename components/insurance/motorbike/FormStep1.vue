<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label">Loại xe</label>

      <div class="control">
        <p>
          <label class="radio">
            <input
              data-cy="motorbike-radio"
              name="haha"
              type="radio"
              required
            />
            &lt; 50cc
          </label>
        </p>

        <p>
          <label class="radio">
            <input
              data-cy="motorbike-radio"
              name="haha"
              type="radio"
              required
            />
            &gt; 50cc
          </label>
        </p>
      </div>
    </div>

    <button data-cy="next-button">NEXT</button>
  </form>
</template>

<script>
export default {
  name: "MotorbikeFormStep1",

  inheritAttrs: false,

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
