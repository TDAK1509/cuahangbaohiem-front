<router>
{
  name: "tinh-phi_xe-may"
}
</router>
<template>
  <section class="section">
    <div class="container">
      <FormStep1 v-show="currentStep === 1" @submit="submitStep1" />
      <FormStep2
        v-show="currentStep === 2"
        :is-promotion="promotionHasBuy1BikeAdd1Bike"
        @submit="submitStep2"
        @back="goToStep(1)"
      />
      <FormStep3
        v-show="currentStep === 3"
        @submit="submitStep3"
        @back="goToStep(2)"
      />
      <FormStep4
        v-show="currentStep === 4"
        v-bind="insuranceRequest"
        @submit="submitStep4"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import MotorbikeInsuranceController, {
  Promotion,
  MotorbikeInsuranceRequest
} from "@/controller/motorbike-insurance/motorbike-insurance";

import { Step1FormValues } from "@/components/insurance/motorbike/FormStep1.vue";

const controller = new MotorbikeInsuranceController();

interface Step2FormValues {
  motorbikeOwner: string;
  licensePlate: string;
  frameNumber: string;
  motorbikeOwner2: string;
  licensePlate2: string;
  frameNumber2: string;
}

interface Step3FormValues {
  buyerName: string;
  buyerAddress: string;
  buyerCity: string;
  buyerDistrict: string;
  buyerWard: string;
  buyerPhone: string;
  buyerEmail: string;
}

export default Vue.extend({
  name: "TinhPhiXeMay",

  layout: "calculator",

  data() {
    return {
      currentStep: 1,
      motorbikeOwner: "",
      motorbikeType: "",
      licensePlate: "",
      frameNumber: "",
      motorbikeOwner2: "",
      licensePlate2: "",
      frameNumber2: "",
      promotionCode: "",
      promotions: [] as string[],
      promotionHasBuy1BikeAdd1Bike: false,
      insuranceStartDate: "",
      insuranceEndDate: "",
      addOn: "",
      insuranceFee: 0,
      addOnFee: 0,
      buyerName: "",
      buyerAddress: "",
      buyerCity: "",
      buyerDistrict: "",
      buyerWard: "",
      buyerPhone: "",
      buyerEmail: ""
    };
  },

  computed: {
    insuranceRequest(): MotorbikeInsuranceRequest {
      return {
        motorbikeOwner: this.motorbikeOwner,
        motorbikeType: this.motorbikeType,
        licensePlate: this.licensePlate,
        frameNumber: this.frameNumber,
        motorbikeOwner2: this.motorbikeOwner2,
        licensePlate2: this.licensePlate2,
        frameNumber2: this.frameNumber2,
        promotionCode: this.promotionCode,
        promotions: this.promotions,
        insuranceStartDate: this.insuranceStartDate,
        insuranceEndDate: this.insuranceEndDate,
        addOn: this.addOn,
        insuranceFee: this.insuranceFee,
        addOnFee: this.addOnFee,
        buyerName: this.buyerName,
        buyerAddress: this.buyerAddress,
        buyerCity: this.buyerCity,
        buyerDistrict: this.buyerDistrict,
        buyerWard: this.buyerWard,
        buyerPhone: this.buyerPhone,
        buyerEmail: this.buyerEmail
      };
    }
  },

  methods: {
    submitStep1(values: Step1FormValues) {
      this.promotionHasBuy1BikeAdd1Bike = values.promotions.includes(
        Promotion.BUY_1_BIKE_ADD_1_BIKE
      );

      this.promotionCode = values.promotionCode;
      this.promotions = values.promotions.map((promotion) =>
        controller.getPromotionLabel(promotion)
      );
      this.insuranceStartDate = values.insuranceStartDate;
      this.insuranceEndDate = values.insuranceEndDate;
      this.motorbikeType = controller.getMotorbikeTypeLabel(
        values.motorbikeType
      );
      this.addOn = values.addOn;
      this.insuranceFee = values.insuranceFee;
      this.addOnFee = values.addOnFee;
      this.goToStep(2);
    },

    submitStep2(values: Step2FormValues) {
      this.motorbikeOwner = values.motorbikeOwner;
      this.licensePlate = values.licensePlate;
      this.frameNumber = values.frameNumber;
      this.motorbikeOwner2 = values.motorbikeOwner2;
      this.licensePlate2 = values.licensePlate2;
      this.frameNumber2 = values.frameNumber2;
      this.goToStep(3);
    },

    goToStep(step: number) {
      this.currentStep = step;
    },

    submitStep3(values: Step3FormValues) {
      this.buyerName = values.buyerName;
      this.buyerAddress = values.buyerAddress;
      this.buyerCity = values.buyerCity;
      this.buyerDistrict = values.buyerDistrict;
      this.buyerWard = values.buyerWard;
      this.buyerPhone = values.buyerPhone;
      this.buyerEmail = values.buyerEmail;
      this.goToStep(4);
    },

    async submitStep4() {
      await controller.save(this.insuranceRequest);
      this.$router.push("xe-may/thanh-toan");
    }
  }
});
</script>
