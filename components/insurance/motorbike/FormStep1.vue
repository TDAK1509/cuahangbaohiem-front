<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label">Loại xe</label>

      <div class="control">
        <label class="radio" data-cy="insurance-year-radio">
          <input
            v-model="insuranceYear"
            type="radio"
            name="insurance_year"
            :value="1"
          />
          1 năm
        </label>
        <label class="radio" data-cy="insurance-year-radio">
          <input
            v-model="insuranceYear"
            type="radio"
            name="insurance_year"
            :value="2"
          />
          2 năm
        </label>
        <label class="radio" data-cy="insurance-year-radio">
          <input
            v-model="insuranceYear"
            type="radio"
            name="insurance_year"
            :value="3"
          />
          3 năm
        </label>
      </div>

      <div class="control">
        <p>
          <label class="radio">
            <input
              data-cy="motorbike-radio"
              name="motorbikeType"
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
              name="motorbikeType"
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

<script lang="ts">
import Vue from "vue";
import { Motorbike } from "@/controller/motorbike-insurance/motorbike-insurance";

export default Vue.extend({
  name: "MotorbikeFormStep1",

  inheritAttrs: false,

  data() {
    return {
      insuranceYear: 1
    };
  },

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
});
</script>
