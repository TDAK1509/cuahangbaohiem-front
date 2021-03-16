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
  MotorbikeType,
  InsuranceFee,
  Promotion,
  MotorbikeInsuranceRequest
} from "@/controller/motorbike-insurance/motorbike-insurance";

const controller = new MotorbikeInsuranceController();

interface Step1FormValues {
  promotionCode: string;
  promotion: Promotion;
  insuranceStartDate: string;
  insuranceEndDate: string;
  hasAddon: boolean;
  motorbikeType: MotorbikeType;
  insuranceFee: InsuranceFee;
}

interface Step2FormValues {
  motorbikeOwner: string;
  licensePlate: string;
  frameNumber: string;
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
      promotionCode: "",
      promotion: null as null | Promotion,
      insuranceStartDate: "",
      insuranceEndDate: "",
      hasAddon: false,
      insuranceFee: { pvi: 0, baoViet: 0 } as InsuranceFee,
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
        promotionCode: this.promotionCode,
        promotion:
          this.promotion !== null
            ? controller.getPromotionLabel(this.promotion)
            : "",
        insuranceStartDate: this.insuranceStartDate,
        insuranceEndDate: this.insuranceEndDate,
        hasAddon: this.hasAddon,
        insuranceFee: this.insuranceFee,
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
      this.promotionCode = values.promotionCode;
      this.promotion = values.promotion;
      this.insuranceStartDate = values.insuranceStartDate;
      this.insuranceEndDate = values.insuranceEndDate;
      this.motorbikeType = controller.getMotorbikeTypeLabel(
        values.motorbikeType
      );
      this.insuranceFee = values.insuranceFee;
      this.hasAddon = values.hasAddon;
      this.goToStep(2);
    },

    submitStep2(values: Step2FormValues) {
      this.motorbikeOwner = values.motorbikeOwner;
      this.licensePlate = values.licensePlate;
      this.frameNumber = values.frameNumber;
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
