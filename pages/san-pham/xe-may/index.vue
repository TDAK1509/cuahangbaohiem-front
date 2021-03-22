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
import { Step2FormValues } from "@/components/insurance/motorbike/FormStep2.vue";

const controller = new MotorbikeInsuranceController();

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
      address: "",
      phone: "",
      email: "",
      motorbikeOwner2: "",
      licensePlate2: "",
      frameNumber2: "",
      address2: "",
      phone2: "",
      email2: "",
      promotionCode: "",
      promotions: [] as string[],
      promotionHasBuy1BikeAdd1Bike: false,
      insuranceStartDate: "",
      insuranceEndDate: "",
      addOn: "",
      insuranceFee: 0,
      addOnFee: 0
    };
  },

  computed: {
    insuranceRequest(): MotorbikeInsuranceRequest {
      return {
        motorbikeOwner: this.motorbikeOwner,
        motorbikeType: this.motorbikeType,
        licensePlate: this.licensePlate,
        frameNumber: this.frameNumber,
        address: this.address,
        phone: this.phone,
        email: this.email,
        motorbikeOwner2: this.motorbikeOwner2,
        licensePlate2: this.licensePlate2,
        frameNumber2: this.frameNumber2,
        address2: this.address2,
        phone2: this.phone2,
        email2: this.email2,
        promotionCode: this.promotionCode,
        promotions: this.promotions,
        insuranceStartDate: this.insuranceStartDate,
        insuranceEndDate: this.insuranceEndDate,
        addOn: this.addOn,
        insuranceFee: this.insuranceFee,
        addOnFee: this.addOnFee
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

    async submitStep2(values: Step2FormValues) {
      this.motorbikeOwner = values.motorbikeOwner;
      this.licensePlate = values.licensePlate;
      this.frameNumber = values.frameNumber;
      this.address = values.address;
      this.phone = values.phone;
      this.email = values.email;

      this.motorbikeOwner2 = values.motorbikeOwner2;
      this.licensePlate2 = values.licensePlate2;
      this.frameNumber2 = values.frameNumber2;
      this.address2 = values.address2;
      this.phone2 = values.phone2;
      this.email2 = values.email2;

      await controller.save(this.insuranceRequest);
      this.$router.push("xe-may/thanh-toan");
    },

    goToStep(step: number) {
      this.currentStep = step;
    }
  }
});
</script>
