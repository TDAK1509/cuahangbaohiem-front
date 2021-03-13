<template>
  <div>
    <FormStepTitle> BƯỚC 2: THÔNG TIN XE </FormStepTitle>
    <form @submit.prevent="submit">
      <div class="field">
        <label class="label">Tên chủ xe:</label>
        <TextField
          v-model="motorbikeOwner"
          data-cy="owner-input"
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
              v-model="shouldShowLicensePlate"
              :value="true"
              type="radio"
            />
            <strong>Biển kiểm soát</strong>
          </label>

          <label class="radio">
            <input
              v-model="shouldShowLicensePlate"
              :value="false"
              type="radio"
            />
            <strong>Số khung</strong>
          </label>
        </div>
      </div>

      <TextField
        v-if="shouldShowLicensePlate"
        v-model="licensePlate"
        data-cy="license-plate-input"
        required
        pattern="[0-9]{2}[A-Z][0-9]-[0-9]{4,5}"
        title="Điền biển số xe theo mẫu: 55Z5-1234 hoặc 66Z6-123456."
      />

      <TextField
        v-else
        v-model="frameNumber"
        data-cy="frame-number-input"
        required
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
  name: "MotorbikeFormStep2",

  inheritAttrs: false,

  data() {
    return {
      shouldShowLicensePlate: true,
      motorbikeOwner: "",
      licensePlate: "",
      frameNumber: ""
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
        frameNumber: this.frameNumber
      };
      this.$emit("submit", step2FormValues);
    },

    clickBack() {
      this.$emit("back");
    }
  }
};
</script>
