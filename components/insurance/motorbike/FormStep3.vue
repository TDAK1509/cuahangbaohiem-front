<template>
  <div>
    <h3>BƯỚC 3: THÔNG TIN NGƯỜI MUA</h3>
    <form @submit.prevent="submit">
      <TextField
        v-model="buyerName"
        data-cy="buyer-name-input"
        required
        pattern="[a-zA-Z\s]+"
        title="Tên của bạn có số hoặc kí tự lạ."
      />

      <TextField
        v-model="buyerAddress"
        data-cy="buyer-address-input"
        required
      />
      <TextField v-model="buyerCity" data-cy="buyer-city-input" required />
      <TextField
        v-model="buyerDistrict"
        data-cy="buyer-district-input"
        required
      />
      <TextField v-model="buyerWard" data-cy="buyer-ward-input" required />

      <TextField
        v-model="buyerPhone"
        data-cy="buyer-phone-input"
        required
        type="tel"
        pattern="[0][0-9]+"
        title="Định dạng số điện thoại không đúng."
      />

      <TextField
        v-model="buyerEmail"
        data-cy="buyer-email-input"
        required
        type="email"
      />

      <button data-cy="next-button">NEXT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MotorbikeFormStep3",

  inheritAttrs: false,

  data() {
    return {
      buyerName: "",
      buyerAddress: "",
      buyerCity: "",
      buyerDistrict: "",
      buyerWard: "",
      buyerPhone: "",
      buyerEmail: ""
    };
  },

  methods: {
    submit() {
      const step3FormValues = {
        buyerName: this.buyerName,
        buyerAddress: this.buyerAddress,
        buyerCity: this.buyerCity,
        buyerDistrict: this.buyerDistrict,
        buyerWard: this.buyerWard,
        buyerPhone: this.buyerPhone,
        buyerEmail: this.buyerEmail
      };
      this.$emit("submit", step3FormValues);
    }
  }
};
</script>
