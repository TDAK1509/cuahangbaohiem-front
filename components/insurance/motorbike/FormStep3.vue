<template>
  <div>
    <FormStepTitle> BƯỚC 3: THÔNG TIN NGƯỜI MUA </FormStepTitle>

    <form @submit.prevent="submit">
      <TextField
        v-model="buyerName"
        data-cy="buyer-name-input"
        label="Họ tên:"
        placeholder="Nguyễn Văn A"
        required
        pattern="[a-zA-Z\s]+"
        title="Tên của bạn có số hoặc kí tự lạ."
      />

      <TextField
        v-model="buyerAddress"
        data-cy="buyer-address-input"
        required
        label="Địa chỉ:"
        placeholder="123 Trần Hưng Đạo"
      />
      <TextField
        v-model="buyerCity"
        data-cy="buyer-city-input"
        required
        label="Tỉnh/thành phố:"
        placeholder="Hồ Chí Minh"
      />

      <TextField
        v-model="buyerDistrict"
        data-cy="buyer-district-input"
        required
        label="Quận/huyện:"
        placeholder="1"
      />

      <TextField
        v-model="buyerWard"
        data-cy="buyer-ward-input"
        required
        label="Phường/xã:"
        placeholder="Bến Thành"
      />

      <TextField
        v-model="buyerPhone"
        data-cy="buyer-phone-input"
        label="Điện thoại:"
        placeholder="0912345678"
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
        label="Email:"
        placeholder="nguyenvana@gmail.com"
      />

      <div class="is-flex is-justify-content-space-between">
        <MotorbikeBackButton @click="clickBack" />
        <MotorbikeNextButton />
      </div>
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
    },

    clickBack() {
      this.$emit("back");
    }
  }
};
</script>
