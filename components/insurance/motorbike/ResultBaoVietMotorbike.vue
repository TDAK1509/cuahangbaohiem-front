<template>
  <div data-cy="bao-viet">
    <ResultTableMotorbike
      logo-file-name="logo-bao-viet.png"
      company-name="Bảo Việt"
      :insurance-fee="insuranceFee"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ResultBaoVietMotorbike",

  props: {
    insuranceFee: {
      type: Number,
      required: true
    }
  }
});
</script>
