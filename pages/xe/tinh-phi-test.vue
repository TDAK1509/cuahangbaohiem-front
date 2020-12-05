<template>
  <div>
    <p>{{ firstCarInsuranceRequest.name }}</p>
    <p>{{ firstCarInsuranceRequest.email }}</p>
    <p>{{ firstCarInsuranceRequest.phone }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Insurance, { CarInsurance } from "@/models/insurance";

export default Vue.extend({
  name: "TinhPhiXeTest",

  async asyncData() {
    const carInsuranceRequests: CarInsurance[] = await Insurance.getCarInsuranceRequests();
    return { carInsuranceRequests };
  },

  data() {
    return {
      carInsuranceRequests: [] as CarInsurance[]
    };
  },

  computed: {
    firstCarInsuranceRequest(): CarInsurance {
      return this.carInsuranceRequests[0];
    }
  }
});
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables";

.tinh-phi__result {
  border-top: 1px solid $grey-lighter;
}
</style>
