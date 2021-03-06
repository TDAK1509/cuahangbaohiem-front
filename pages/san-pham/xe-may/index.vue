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
      currentStep: 1
    };
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
    }
  }
});
</script>
