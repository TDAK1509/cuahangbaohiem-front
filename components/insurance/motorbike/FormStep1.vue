<template>
  <div>
    <FormStepTitle>BƯỚC 1: CHỌN GÓI BẢO HIỂM</FormStepTitle>

    <form @submit.prevent="submit">
      <SelectField />

      <TextField
        v-model="promotionCode"
        label="Nhập mã khuyến mãi:"
        placeholder="Mã khuyến mãi"
      />

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

      <div v-if="isValidPromotionCode" class="field">
        <label class="label">Khuyến mãi:</label>

        <div class="control">
          <p v-if="insuranceYear === 1">
            <label class="radio">
              <input
                v-model="promotion"
                :value="promotionValues.BUY_1_YEAR_ADD_1_YEAR"
                name="promotion"
                type="radio"
              />
              {{ promotion1Label }}
            </label>
          </p>

          <p>
            <label class="radio">
              <input
                v-model="promotion"
                :value="promotionValues.BUY_1_BIKE_ADD_1_BIKE"
                name="promotion"
                type="radio"
              />
              {{ promotion2Label }}
            </label>
          </p>
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
              format="DD-MM-YYYY"
              :clearable="false"
              :editable="false"
              :disabled-date="dateIsNotWithin2MonthsFromToday"
            />
          </div>
          <div class="is-flex mt-3">
            <div class="form-step-1__date-label">đến ngày</div>
            <DatePicker
              v-model="insuranceEndDate"
              data-cy="insurance-end-date"
              format="DD-MM-YYYY"
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
                :value="motorbikeTypeValues.UP_TO_50_CC"
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
                :value="motorbikeTypeValues.ABOVE_50_CC"
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

        <div v-if="hasAddon" class="addon__description mt-2">
          <ul class="addon__list">
            <li>Sỗ chỗ tham gia bảo hiểm: <strong>2</strong></li>
            <li>Số tiền bảo hiểm: <strong>10.000.000 VND</strong></li>
          </ul>
        </div>
      </div>

      <div v-if="pviInsuranceFee > 0" class="result field">
        <label class="label is-uppercase">Phí bảo hiểm:</label>

        <ul class="result__list">
          <li class="result__list-item">
            <ResultPviMotorbike :insurance-fee="pviInsuranceFee" />
          </li>
          <li class="result__list-item">
            <ResultBaoVietMotorbike :insurance-fee="pviInsuranceFee" />
          </li>
        </ul>
      </div>

      <MotorbikeNextButton />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { addMonths, format } from "date-fns";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import mixinMoneyFilter from "@/utils/mixins/money-filters";

import MotorbikeInsuranceController, {
  MotorbikeType,
  Promotion
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
      promotionCode: "",
      promotion: null as null | Promotion,
      promotionValues: Promotion,
      promotion1Label: controller.getPromotionLabel(
        Promotion.BUY_1_YEAR_ADD_1_YEAR
      ),
      promotion2Label: controller.getPromotionLabel(
        Promotion.BUY_1_BIKE_ADD_1_BIKE
      ),
      insuranceYear: 1,
      insuranceStartDate: new Date(),
      motorbikeType: null as null | MotorbikeType,
      motorbikeTypeValues: MotorbikeType,
      motorbikeType1Label: controller.getMotorbikeTypeLabel(
        MotorbikeType.UP_TO_50_CC
      ),
      motorbikeType2Label: controller.getMotorbikeTypeLabel(
        MotorbikeType.ABOVE_50_CC
      ),
      hasAddon: false,
      pviInsuranceFee: 0,
      baoVietInsuranceFee: 0,
      isValidPromotionCode: false
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
    },
    promotionCode() {
      this.checkPromotionCodeValidity();
    }
  },

  methods: {
    submit() {
      const step1FormValues = {
        promotionCode: this.promotionCode,
        promotion: this.promotion,
        insuranceStartDate: format(this.insuranceStartDate, "dd-MM-yyyy"),
        insuranceEndDate: format(this.insuranceEndDate, "dd-MM-yyyy"),
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
    },

    dateIsNotWithin2MonthsFromToday(date: Date): boolean {
      const nextTwoMonthsDate = addMonths(new Date(), 1);
      return date < new Date() || date > nextTwoMonthsDate;
    },

    checkPromotionCodeValidity() {
      this.isValidPromotionCode = this.promotionCode === "banAnhKhuong";
    }
  }
});
</script>

<style lang="scss" scoped>
.form-step-1__date-label {
  flex-basis: 5rem;
}

.addon__description {
  font-size: 0.9rem;
}

.addon__list {
  list-style-type: disc;
  margin-left: 1rem;
}

.result {
  margin-top: 2em;
  padding-top: 0.5em;
  border-top: 1px solid black;

  &__list > * + * {
    margin-top: 1em;
  }
}
</style>
