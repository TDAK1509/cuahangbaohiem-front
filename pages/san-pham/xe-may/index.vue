<router>
{
  name: "tinh-phi_xe-may"
}
</router>
<template>
  <section class="section">
    <div class="container">
      <FormStep1 v-if="currentStep === 1" @submit="submitStep1" />
      <FormStep2 v-else-if="currentStep === 2" @submit="submitStep2" />
      <FormStep3 v-else-if="currentStep === 3" @submit="submitStep3" />
      <FormStep4
        v-else-if="currentStep === 4"
        v-bind="step4Props"
        @submit="submitStep4"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {
  MotorbikeType,
  getMotorbikeTypeLabel
} from "@/controller/motorbike-insurance/motorbike-insurance";

interface Step1FormValues {
  insuranceStartDate: string;
  insuranceEndDate: string;
  motorbikeType: MotorbikeType;
  insuranceFee: InsuranceFee;
}

interface InsuranceFee {
  pvi: number;
  baoViet: number;
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
      insuranceStartDate: "",
      insuranceEndDate: "",
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
    step4Props(): { [key: string]: string | InsuranceFee } {
      return {
        motorbikeOwner: this.motorbikeOwner,
        motorbikeType: this.motorbikeType,
        licensePlate: this.licensePlate,
        frameNumber: this.frameNumber,
        insuranceStartDate: this.insuranceStartDate,
        insuranceEndDate: this.insuranceEndDate,
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
      this.insuranceStartDate = values.insuranceStartDate;
      this.insuranceEndDate = values.insuranceEndDate;
      this.motorbikeType = getMotorbikeTypeLabel(values.motorbikeType);
      this.insuranceFee = values.insuranceFee;
      this.currentStep = 2;
    },

    submitStep2(values: Step2FormValues) {
      this.motorbikeOwner = values.motorbikeOwner;
      this.licensePlate = values.licensePlate;
      this.frameNumber = values.frameNumber;
      this.currentStep = 3;
    },

    submitStep3(values: Step3FormValues) {
      this.buyerName = values.buyerName;
      this.buyerAddress = values.buyerAddress;
      this.buyerCity = values.buyerCity;
      this.buyerDistrict = values.buyerDistrict;
      this.buyerWard = values.buyerWard;
      this.buyerPhone = values.buyerPhone;
      this.buyerEmail = values.buyerEmail;
      this.currentStep = 4;
    },

    submitStep4() {
      //
    }
  }
});
</script>
