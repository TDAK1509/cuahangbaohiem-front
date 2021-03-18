<template>
  <div>
    <FormStepTitle>BƯỚC 1: CHỌN GÓI BẢO HIỂM</FormStepTitle>

    <form @submit.prevent="submit">
      <SelectField
        v-model="motorbikeType"
        label="Loại xe mua bảo hiểm"
        :options="motorbikeTypeOptions"
        required
      />

      <FormSpacer />

      <SelectField
        v-model="insuranceYear"
        label="Thời gian mua"
        :options="insuranceYearOptions"
        required
      />

      <FormSpacer />

      <DateField
        v-model="insuranceStartDate"
        label="Ngày hiệu lực"
        :disabled-date="dateIsNotWithin2MonthsFromToday"
      />

      <FormSpacer />

      <DateField v-model="insuranceEndDate" label="Ngày kết thúc" disabled />

      <FormSpacer />

      <InputField
        label="Phí bảo hiểm TNDS bắt buộc"
        value="Bla bla bla"
        disabled
      />

      <FormSpacer />

      <p>
        <label class="checkbox">
          <input
            v-model="hasAddon"
            data-cy="insurance-addon-checkbox"
            type="checkbox"
          />
          Bảo hiểm tai nạn người trên xe, phụ xe, người ngồi trên xe
        </label>
      </p>

      <FormSpacer />

      <SelectField
        v-model="addon"
        label="Chọn quyền lợi"
        :options="addonOptions"
        required
      />

      <FormSpacer />

      <InputField
        label="Phí BH tai nạn lái xe, phụ xe, người ngồi trên xe"
        value="Bla bla bla"
        disabled
      />

      <FormSpacer />

      <InputField
        label="Tổng phí thanh toán"
        value="66.000 + 22.000 = 88.000 VND"
        disabled
      />

      <FormSpacer />

      <InputField v-model="promotionCode" label="Mã khuyến mãi:" />

      <FormSpacer />

      <div v-if="isValidPromotionCode" class="field">
        <label class="label">Khuyến mãi:</label>

        <div class="control">
          {{ promotion }}
          <p v-if="insuranceYear === '1'">
            <label class="checkbox">
              <input
                v-model="promotion"
                :value="promotionValues.BUY_1_YEAR_ADD_1_YEAR"
                name="promotion"
                type="checkbox"
              />
              {{ promotion1Label }}
            </label>
          </p>

          <p>
            <label class="checkbox">
              <input
                v-model="promotion"
                :value="promotionValues.BUY_1_BIKE_ADD_1_BIKE"
                name="promotion"
                type="checkbox"
              />
              {{ promotion2Label }}
            </label>
          </p>
        </div>
      </div>

      <div style="width: 100%; text-align: right">
        <MotorbikeNextButton />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { addMonths, format } from "date-fns";

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

  mixins: [mixinMoneyFilter],

  inheritAttrs: false,

  data() {
    return {
      motorbikeTypeOptions: [
        {
          value: MotorbikeType.UP_TO_50_CC,
          text: controller.getMotorbikeTypeLabel(MotorbikeType.UP_TO_50_CC)
        },
        {
          value: MotorbikeType.ABOVE_50_CC,
          text: controller.getMotorbikeTypeLabel(MotorbikeType.ABOVE_50_CC)
        }
      ],
      insuranceYearOptions: [
        {
          value: "1",
          text: "1 năm"
        },
        {
          value: "2",
          text: "2 năm"
        },
        {
          value: "3",
          text: "3 năm"
        }
      ],
      addonOptions: [
        {
          value: "10",
          text: "10 triệu đồng/ người/ vụ"
        },
        {
          value: "20",
          text: "20 triệu đồng/ người/ vụ"
        },
        {
          value: "30",
          text: "30 triệu đồng/ người/ vụ"
        }
      ],
      promotionCode: "",
      promotion: [] as Promotion[],
      promotionValues: Promotion,
      promotion1Label: controller.getPromotionLabel(
        Promotion.BUY_1_YEAR_ADD_1_YEAR
      ),
      promotion2Label: controller.getPromotionLabel(
        Promotion.BUY_1_BIKE_ADD_1_BIKE
      ),
      insuranceYear: "1",
      insuranceStartDate: new Date(),
      motorbikeType: MotorbikeType.ABOVE_50_CC,
      hasAddon: false,
      addon: "",
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
      return new Date(year + parseInt(this.insuranceYear), month, day);
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
      pvi.setYear(parseInt(this.insuranceYear));
      pvi.setMotorbike(this.motorbikeType as MotorbikeType);
      pvi.setHasAddon(this.hasAddon);
      this.pviInsuranceFee = pvi.getInsuranceFee();
    },

    calculateBaoVietInsuranceFee() {
      baoViet.setYear(parseInt(this.insuranceYear));
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
