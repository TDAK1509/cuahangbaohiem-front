<template>
  <div>
    <FormStepTitle> BƯỚC 2: THÔNG TIN XE </FormStepTitle>

    <div class="notification is-warning">
      Giấy chứng nhận điện tử TNDS sẽ được gửi vào email và số điện thoại này.
      Bạn vui lòng điền chính xác địa chỉ email và số điện thoại.
    </div>

    <form @submit.prevent="submit">
      <InputField
        v-model="motorbikeOwner"
        label="Tên chủ xe"
        placeholder="Ghi theo đăng ký"
        pattern="[a-zA-Z\s]+"
        title="Tên của bạn có số hoặc kí tự lạ."
        required
      />

      <FormSpacer />

      <InputField
        v-model="address"
        label="Địa chỉ"
        placeholder="123 Trần Hưng Đạo, P. Bến Thành, Q.1, Tp. HCM"
        required
      />

      <FormSpacer />

      <InputField
        v-model="licensePlate"
        label="Biển kiểm soát"
        placeholder="55Z5-9999"
      />

      <FormSpacer />

      <InputField
        v-model="frameNumber"
        label="Số khung"
        placeholder="Nếu chưa có biển kiểm soát"
      />

      <FormSpacer />

      <InputField
        v-model="phone"
        label="Điện thoại:"
        placeholder="0912345678"
        required
        type="tel"
        pattern="[0][0-9]+"
        title="Định dạng số điện thoại không đúng."
      />

      <FormSpacer />

      <InputField
        v-model="email"
        required
        type="email"
        label="Email:"
        placeholder="nguyenvana@gmail.com"
      />

      <FormSpacer />

      <template v-if="isPromotion">
        <h4 class="form-step-2__promotion-title has-text-danger">
          Thông tin xe được khuyến mãi
        </h4>

        <InputField
          v-model="motorbikeOwner2"
          label="Tên chủ xe"
          placeholder="Ghi theo đăng ký"
          pattern="[a-zA-Z\s]+"
          title="Tên của bạn có số hoặc kí tự lạ."
          required
        />

        <FormSpacer />

        <InputField
          v-model="address2"
          label="Địa chỉ"
          placeholder="123 Trần Hưng Đạo, P. Bến Thành, Q.1, Tp. HCM"
          required
        />

        <FormSpacer />

        <InputField
          v-model="licensePlate2"
          label="Biển kiểm soát"
          placeholder="55Z5-9999"
        />

        <FormSpacer />

        <InputField
          v-model="frameNumber2"
          label="Số khung"
          placeholder="Nếu chưa có biển kiểm soát"
        />

        <FormSpacer />

        <InputField
          v-model="phone2"
          label="Điện thoại:"
          placeholder="0912345678"
          required
          type="tel"
          pattern="[0][0-9]+"
          title="Định dạng số điện thoại không đúng."
        />

        <FormSpacer />

        <InputField
          v-model="email2"
          required
          type="email"
          label="Email:"
          placeholder="nguyenvana@gmail.com"
        />

        <FormSpacer />
      </template>

      <div class="control">
        <label class="checkbox">
          <input v-model="shouldShowTNDSPaperSample" type="checkbox" />
          Tôi muốn nhận chứng nhận TNDS bản giấy
        </label>
      </div>

      <FormSpacer />

      <template v-if="shouldShowTNDSPaperSample">
        <InputField
          v-model="paperSampleReceiverName"
          required
          label="Tên người nhận"
        />

        <FormSpacer />

        <InputField
          v-model="paperSampleReceiverAddress"
          required
          label="Địa chỉ"
        />

        <FormSpacer />
      </template>

      <div class="is-flex is-justify-content-space-between">
        <MotorbikeBackButton @click="clickBack" />
        <MotorbikeNextButton />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MotorbikeFormStep2",

  inheritAttrs: false,

  props: {
    isPromotion: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      motorbikeOwner: "",
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
      shouldShowTNDSPaperSample: false,
      paperSampleReceiverName: "",
      paperSampleReceiverAddress: ""
    };
  },

  watch: {
    shouldShowTNDSPaperSample(shouldShow) {
      if (shouldShow) {
        this.paperSampleReceiverName = this.motorbikeOwner;
        this.paperSampleReceiverAddress = this.address;
      } else {
        this.paperSampleReceiverName = "";
        this.paperSampleReceiverAddress = "";
      }
    }
  },

  methods: {
    submit() {
      const step2FormValues = {
        motorbikeOwner: this.motorbikeOwner,
        licensePlate: this.licensePlate,
        frameNumber: this.frameNumber,
        motorbikeOwner2: this.motorbikeOwner2,
        licensePlate2: this.licensePlate2,
        frameNumber2: this.frameNumber2
      };
      this.$emit("submit", step2FormValues);
    },

    clickBack() {
      this.$emit("back");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-step-2__promotion-title {
  font-weight: 700;
  padding: 1em 0;
  font-size: 1.2rem;
  text-align: center;
}
</style>
