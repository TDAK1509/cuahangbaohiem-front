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
        placeholder="Nếu chưa có biển kmểm soát"
      />

      <FormSpacer />

      <template v-if="isPromotion">
        <h1 class="form-step-2__subtitle">Thông tin xe được khuyến mãi:</h1>

        <div class="field">
          <label class="label">Tên chủ xe:</label>
          <TextField
            v-model="motorbikeOwner2"
            required
            pattern="[a-zA-Z\s]+"
            title="Tên của bạn có số hoặc kí tự lạ."
            placeholder="Ghi theo đăng ký"
          />
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input
                v-model="shouldShowLicensePlate2"
                :value="true"
                type="radio"
              />
              <strong>Biển kiểm soát</strong>
            </label>

            <label class="radio">
              <input
                v-model="shouldShowLicensePlate2"
                :value="false"
                type="radio"
              />
              <strong>Số khung</strong>
            </label>
          </div>
        </div>

        <TextField
          v-if="shouldShowLicensePlate2"
          v-model="licensePlate2"
          required
        />

        <TextField v-else v-model="frameNumber2" required />
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
      shouldShowLicensePlate: true,
      motorbikeOwner: "",
      licensePlate: "",
      frameNumber: "",
      shouldShowLicensePlate2: true,
      motorbikeOwner2: "",
      licensePlate2: "",
      frameNumber2: "",
      address: ""
    };
  },

  computed: {
    shouldShowFrameNumber() {
      return !this.shouldShowLicensePlate;
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
.form-step-2__subtitle {
  font-weight: 700;
  padding: 1em 0;
  font-size: 1.2rem;
  color: var(--clr-primary);
}
</style>
