<template>
  <div>
    <FormStepTitle> BƯỚC 4: TÓM TẮT ĐƠN HÀNG </FormStepTitle>

    <form @submit.prevent="submit">
      <section class="row">
        <h4 class="row__title">1. THÔNG TIN CHỦ XE</h4>
        <div class="row__content">
          <p>Tên chủ xe:</p>
          <p>{{ motorbikeOwner }}</p>
        </div>
      </section>

      <section class="row">
        <h4 class="row__title">2. THÔNG TIN VỀ XE THAM GIA BẢO HIỂM</h4>
        <div class="row__content">
          <p>Loại xe:</p>
          <p>{{ motorbikeType }}</p>
          <p>Biển số:</p>
          <p>{{ licensePlate }}</p>
          <p>Số khung:</p>
          <p>{{ frameNumber }}</p>
        </div>
      </section>

      <section class="row">
        <h4 class="row__title">3. THỜI HẠN BẢO HIỂM</h4>
        <div>
          <p>
            Từ ngày {{ insuranceStartDate }} đến ngày {{ insuranceEndDate }}
          </p>
        </div>
      </section>

      <section class="row">
        <h4 class="row__title">4. MỨC TRÁCH NHIỆM VÀ PHÍ BẢO HIỂM</h4>

        <div class="row__table">
          <h5 class="row__table-row-title is-size-6 has-text-weight-bold">
            Phạm vi bảo hiểm:
          </h5>
          <p class="row__table-row-content">
            Bảo hiểm Trách nhiệm dân sự bắt buộc
          </p>

          <h5 class="row__table-row-title is-size-6 has-text-weight-bold">
            Mức trách nhiệm:
          </h5>
          <div class="row__table-row-content">
            <p>Mức trách nhiệm đối với người thứ 3</p>
            <ul>
              <li>Về người: 150,000,000 VND/người/vụ</li>
              <li>Về tài sản: 50,000,000 VND/vụ</li>
            </ul>
          </div>

          <h5 class="row__table-row-title is-size-6 has-text-weight-bold">
            Phí bảo hiểm (đã bao gồm VAT):
          </h5>
        </div>
      </section>

      <section class="row">
        <h4 class="row__title">
          5. THÔNG TIN GIAO NHẬN GIẤY CHỨNG NHẬN BẢO HIỂM
        </h4>
        <div class="row__content">
          <p>Họ tên:</p>
          <p>{{ buyerName }}</p>

          <p>Địa chỉ:</p>
          <p>
            {{ buyerAddress }}, {{ buyerWard }}, {{ buyerDistrict }},
            {{ buyerCity }}
          </p>

          <p>Điện thoại:</p>
          <p>{{ buyerPhone }}</p>

          <p>Email:</p>
          <p>{{ buyerEmail }}</p>

          <p>Hình thức giao nhận:</p>
          <p>
            Ngay sau khi Quý khách thanh toán phí bảo hiểm thành công, Bảo Việt
            sẽ gửi bản mềm Giấy chứng nhận bảo hiểm tới địa chỉ email Quý khách
            đăng ký.
          </p>
        </div>
      </section>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input
              v-model="isAgreed"
              type="checkbox"
              data-cy="agreement-checkbox"
            />
            <span class="row__checkbox-label">
              Tôi/chúng tôi xác nhận rằng các thông tin nêu trên là đầy đủ và
              xác thực theo sự hiểu biết cao nhất của tôi/chúng tôi và đồng ý
              rằng các kê khai yêu cầu bảo hiểm là cơ sở của hợp đồng bảo hiểm
              và chấp nhận các điều kiện bảo hiểm quy định tại hợp đồng bảo
              hiểm.
            </span>
          </label>
        </div>
      </div>

      <p v-if="shouldShowError" class="has-text-danger">
        Quý khách vui lòng chọn cam kết trước khi thực hiện đặt hàng.
      </p>

      <div class="is-flex is-justify-content-space-between mt-5">
        <MotorbikeBackButton @click="clickBack" />
        <MotorbikeNextButton />
      </div>
    </form>
  </div>
</template>

<script>
import mixinMoneyFilter from "@/utils/mixins/money-filters";

export default {
  name: "MotorbikeFormStep4",

  mixins: [mixinMoneyFilter],

  inheritAttrs: false,

  props: {
    motorbikeOwner: {
      type: String,
      required: true
    },
    motorbikeType: {
      type: String,
      required: true
    },
    licensePlate: {
      type: String,
      required: true
    },
    frameNumber: {
      type: String,
      required: true
    },
    insuranceStartDate: {
      type: String,
      required: true
    },
    insuranceEndDate: {
      type: String,
      required: true
    },
    insuranceFee: {
      type: Number,
      required: true
    },
    addOnFee: {
      type: Number,
      required: true
    },
    buyerName: {
      type: String,
      required: true
    },
    buyerAddress: {
      type: String,
      required: true
    },
    buyerCity: {
      type: String,
      required: true
    },
    buyerDistrict: {
      type: String,
      required: true
    },
    buyerWard: {
      type: String,
      required: true
    },
    buyerPhone: {
      type: String,
      required: true
    },
    buyerEmail: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isAgreed: false,
      shouldShowError: false
    };
  },

  methods: {
    submit() {
      this.shouldShowError = false;

      if (!this.isAgreed) {
        this.shouldShowError = true;
        return;
      }

      this.$emit("submit");
    },

    clickBack() {
      this.$emit("back");
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 2em;
}
.row__title {
  margin-bottom: 0.8em;
  background: var(--clr-primary);
  color: white;
  text-transform: uppercase;
  padding: 0.6em;
  font-weight: 700;
}

.row__content {
  display: grid;
  grid-template-columns: 30% 1fr;
  row-gap: 0.5em;
}

.row__checkbox-label {
  line-height: 1.5;
}

.row__table {
  display: grid;
  grid-template-columns: 1fr;
}

.row__table-row-title {
  margin-bottom: 0.3em;
}

.row__table-row-content {
  margin-bottom: 1.5em;
}

.row__table-row-insurance-fee {
  margin-top: 1em;
}
</style>
