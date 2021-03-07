<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label">Số năm bảo hiểm</label>

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
    </div>

    <div class="field">
      <label class="label">Thời hạn bảo hiểm</label>

      <DatePicker
        v-model="insuranceStartDate"
        data-cy="insurance-start-date"
        :format="dateFormat"
      />

      <input :value="insuranceEndDate" data-cy="insurance-end-date" disabled />
    </div>

    <div class="field">
      <label class="label">Loại xe</label>

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
import moment from "moment";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default Vue.extend({
  name: "MotorbikeFormStep1",

  components: { DatePicker },

  inheritAttrs: false,

  data() {
    return {
      dateFormat: "DD-MM-YYYY",
      insuranceYear: 1,
      insuranceStartDate: new Date()
    };
  },

  computed: {
    insuranceEndDate(): string {
      return moment(this.insuranceStartDate)
        .add(1, "year")
        .format(this.dateFormat);
    }
  },

  methods: {
    submit() {
      this.$emit("submit");
    }
  }
});
</script>
