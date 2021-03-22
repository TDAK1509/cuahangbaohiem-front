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

      <div data-cy="start-date">
        <DateField
          v-model="insuranceStartDate"
          label="Ngày hiệu lực"
          :disabled-date="dateIsNotWithin2MonthsFromToday"
        />
      </div>

      <FormSpacer />

      <div data-cy="end-date">
        <DateField v-model="insuranceEndDate" label="Ngày kết thúc" disabled />
      </div>

      <FormSpacer />

      <div data-cy="insurance-fee">
        <InputField
          label="Phí bảo hiểm TNDS bắt buộc"
          :value="insuranceFeeString"
          disabled
        />
      </div>

      <FormSpacer />

      <p>
        <label class="checkbox">
          <input
            v-model="hasAddOn"
            data-cy="insurance-addOn-checkbox"
            type="checkbox"
          />
          Bảo hiểm tai nạn người trên xe, phụ xe, người ngồi trên xe
        </label>
      </p>

      <FormSpacer />

      <SelectField
        v-model="addOn"
        label="Chọn quyền lợi"
        :options="addOnOptions"
        required
      />

      <FormSpacer />

      <InputField
        label="Phí BH tai nạn lái xe, phụ xe, người ngồi trên xe"
        :value="addOnFeeString"
        disabled
      />

      <FormSpacer />

      <InputField
        label="Tổng phí thanh toán"
        :value="`${insuranceFeeString} + ${addOnFeeString} = ${totalFee}`"
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
import { addMonths, addDays, format } from "date-fns";

import mixinMoneyFilter from "@/utils/mixins/money-filters";

import MotorbikeInsuranceController, {
  MotorbikeAddOn,
  MotorbikeType,
  Promotion
} from "@/controller/motorbike-insurance/motorbike-insurance";

const controller = new MotorbikeInsuranceController();

export interface Step1FormValues {
  promotionCode: string;
  promotions: Promotion[];
  insuranceStartDate: string;
  insuranceEndDate: string;
  addOn: string;
  motorbikeType: MotorbikeType;
  insuranceFee: number;
  addOnFee: number;
}

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
      addOnOptions: [
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
      promotions: [] as Promotion[],
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
      hasAddOn: false,
      addOn: MotorbikeAddOn.TEN,
      insuranceFee: 0,
      addOnFee: 0,
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
    },

    insuranceFeeString(): string {
      return this?.$options?.filters?.toVnd(this.insuranceFee);
    },

    addOnFeeString(): string {
      return this?.$options?.filters?.toVnd(this.addOnFee);
    },

    totalFee(): string {
      return this?.$options?.filters?.toVnd(this.insuranceFee + this.addOnFee);
    }
  },

  watch: {
    insuranceYear() {
      this.calculateInsuranceFee();
    },
    motorbikeType() {
      this.calculateInsuranceFee();
    },
    hasAddOn() {
      this.calculateInsuranceFee();
    },
    addOn() {
      this.calculateInsuranceFee();
    },
    promotionCode() {
      this.checkPromotionCodeValidity();
    }
  },

  mounted() {
    this.calculateInsuranceFee();
  },

  methods: {
    submit() {
      const step1FormValues: Step1FormValues = {
        promotionCode: this.promotionCode,
        promotions: this.promotions,
        insuranceStartDate: format(this.insuranceStartDate, "dd-MM-yyyy"),
        insuranceEndDate: format(this.insuranceEndDate, "dd-MM-yyyy"),
        addOn: controller.getAddOnLabel(this.addOn),
        motorbikeType: this.motorbikeType,
        insuranceFee: this.insuranceFee,
        addOnFee: this.addOnFee
      };
      this.$emit("submit", step1FormValues);
    },

    calculateInsuranceFee() {
      controller.setYear(parseInt(this.insuranceYear));
      controller.setMotorbike(this.motorbikeType);
      controller.setAddon(this.addOn);
      this.insuranceFee = controller.getInsuranceFee();
      this.addOnFee = this.hasAddOn ? controller.getAddOnFee() : 0;
    },

    dateIsNotWithin2MonthsFromToday(date: Date): boolean {
      const yesterday = addDays(new Date(), -1);
      const nextTwoMonthsDate = addMonths(new Date(), 1);
      return date < yesterday || date > nextTwoMonthsDate;
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

.addOn__description {
  font-size: 0.9rem;
}

.addOn__list {
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
