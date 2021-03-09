<template>
  <div data-cy="pvi">
    <ResultTable
      logo-file-name="logo-pvi.png"
      company-name="PVI"
      :insurance-fee="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ResultPviMotorbike",

  props: {
    insuranceFee: {
      type: Number,
      required: true
    }
  }
});
</script>
