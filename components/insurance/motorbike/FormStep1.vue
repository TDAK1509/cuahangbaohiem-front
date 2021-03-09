<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label">Số năm bảo hiểm:</label>

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
      <label class="label">Thời hạn bảo hiểm:</label>

      <div class="form-step-1__date-container">
        <div class="is-flex is-align-items-center">
          <div class="form-step-1__date-label">Từ ngày</div>
          <DatePicker
            v-model="insuranceStartDate"
            data-cy="insurance-start-date"
            :format="dateFormat"
            :clearable="false"
            :editable="false"
          />
        </div>
        <div class="is-flex mt-3">
          <div class="form-step-1__date-label">đến ngày</div>
          <DatePicker
            v-model="insuranceEndDate"
            data-cy="insurance-end-date"
            :format="dateFormat"
            disabled
          />
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Loại xe:</label>

      <div class="control">
        <p>
          <label class="radio">
            <input
              v-model="motorbikeType"
              :value="motorbikeTypeValue.UP_TO_50_CC"
              data-cy="motorbike-type-radio"
              name="motorbikeType"
              type="radio"
              required
            />
            {{ motorbikeType1Label }}
          </label>
        </p>

        <p class="mt-1">
          <label class="radio">
            <input
              v-model="motorbikeType"
              :value="motorbikeTypeValue.ABOVE_50_CC"
              data-cy="motorbike-type-radio"
              name="motorbikeType"
              type="radio"
              required
            />
            {{ motorbikeType2Label }}
          </label>
        </p>
      </div>
    </div>

    <div v-if="isMotorbikeTypeSelected" class="field">
      <label class="label">Đăng ký bổ sung:</label>

      <label class="checkbox">
        <input
          v-model="hasAddon"
          data-cy="insurance-addon-checkbox"
          type="checkbox"
        />
        Bảo hiểm tai nạn người trên xe
      </label>
    </div>

    <div v-if="pviInsuranceFee > 0">
      <div data-cy="pvi">{{ pviInsuranceFee | toVnd }}</div>
      <div data-cy="bao-viet">{{ baoVietInsuranceFee | toVnd }}</div>
    </div>

    <button data-cy="next-button">NEXT</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import mixinMoneyFilter from "@/utils/mixins/money-filters";

import MotorbikeInsuranceController, {
  MotorbikeType
} from "@/controller/motorbike-insurance/motorbike-insurance";
import PviMotorbikeInsurance from "@/controller/motorbike-insurance/pvi-motorbike-insurance";
import BaoVietMotorbikeInsurance from "@/controller/motorbike-insurance/bao-viet-motorbike-insurance";

const pvi = new PviMotorbikeInsurance();
const baoViet = new BaoVietMotorbikeInsurance();
const controller = new MotorbikeInsuranceController();

export default Vue.extend({
  name: "MotorbikeFormStep1",

  components: { DatePicker },

  mixins: [mixinMoneyFilter],

  inheritAttrs: false,

  data() {
    return {
      dateFormat: "DD-MM-YYYY",
      insuranceYear: 1,
      insuranceStartDate: new Date(),
      motorbikeType: null as null | MotorbikeType,
      motorbikeTypeValue: MotorbikeType,
      motorbikeType1Label: controller.getMotorbikeTypeLabel(
        MotorbikeType.UP_TO_50_CC
      ),
      motorbikeType2Label: controller.getMotorbikeTypeLabel(
        MotorbikeType.ABOVE_50_CC
      ),
      hasAddon: false,
      pviInsuranceFee: 0,
      baoVietInsuranceFee: 0
    };
  },

  computed: {
    insuranceEndDate(): Date {
      const year = this.insuranceStartDate.getFullYear();
      const month = this.insuranceStartDate.getMonth();
      const day = this.insuranceStartDate.getDate();
      return new Date(year + this.insuranceYear, month, day);
    },

    isMotorbikeTypeSelected(): boolean {
      return this.motorbikeType !== null;
    }
  },

  watch: {
    insuranceYear() {
      this.calculateInsuranceFee();
    },
    motorbikeType() {
      this.calculateInsuranceFee();
    },
    hasAddon() {
      this.calculateInsuranceFee();
    }
  },

  methods: {
    submit() {
      const step1FormValues = {
        insuranceStartDate: moment(this.insuranceStartDate).format(
          this.dateFormat
        ),
        insuranceEndDate: moment(this.insuranceEndDate).format(this.dateFormat),
        motorbikeType: this.motorbikeType,
        insuranceFee: {
          pvi: this.pviInsuranceFee,
          baoViet: this.baoVietInsuranceFee
        },
        hasAddon: this.hasAddon
      };
      this.$emit("submit", step1FormValues);
    },

    calculateInsuranceFee() {
      if (this.isMotorbikeTypeSelected) {
        this.calculatePviInsuranceFee();
        this.calculateBaoVietInsuranceFee();
      }
    },

    calculatePviInsuranceFee() {
      pvi.setYear(this.insuranceYear);
      pvi.setMotorbike(this.motorbikeType as MotorbikeType);
      pvi.setHasAddon(this.hasAddon);
      this.pviInsuranceFee = pvi.getInsuranceFee();
    },

    calculateBaoVietInsuranceFee() {
      baoViet.setYear(this.insuranceYear);
      baoViet.setMotorbike(this.motorbikeType as MotorbikeType);
      baoViet.setHasAddon(this.hasAddon);
      this.baoVietInsuranceFee = baoViet.getInsuranceFee();
    }
  }
});
</script>

<style lang="scss" scoped>
.form-step-1__date-label {
  flex-basis: 5rem;
}
</style>
