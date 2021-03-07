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

export default Vue.extend({
  name: "TinhPhiXeMay",

  layout: "calculator",

  data() {
    return {
      currentStep: 1,
      motorbikeOwner: "",
      motorbike: "",
      licensePlate: "",
      frameNumber: "",
      insuranceDateStart: "",
      insuranceDateEnd: "",
      insuranceFee: "",
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
    step4Props(): { [key: string]: string } {
      return {
        motorbikeOwner: this.motorbikeOwner,
        motorbike: this.motorbike,
        licensePlate: this.licensePlate,
        frameNumber: this.frameNumber,
        insuranceDateStart: this.insuranceDateStart,
        insuranceDateEnd: this.insuranceDateEnd,
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
    submitStep1() {
      this.currentStep = 2;
    },

    submitStep2() {
      this.currentStep = 3;
    },

    submitStep3() {
      this.currentStep = 4;
    },

    submitStep4() {
      //
    }
  }
});
</script>
