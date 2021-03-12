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
        <table>
          <tr>
            <td>Pvi: {{ insuranceFee.pvi | toVnd }}</td>
            <td>Bao Viet: {{ insuranceFee.baoViet | toVnd }}</td>
          </tr>
        </table>
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

      <p v-if="shouldShowError">
        Quý khách vui lòng chọn cam kết trước khi thực hiện đặt hàng
      </p>

      <button data-cy="next-button">NEXT</button>
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
      default: ""
    },
    motorbikeType: {
      type: String,
      default: ""
    },
    licensePlate: {
      type: String,
      default: ""
    },
    frameNumber: {
      type: String,
      default: ""
    },
    insuranceStartDate: {
      type: String,
      default: ""
    },
    insuranceEndDate: {
      type: String,
      default: ""
    },
    insuranceFee: {
      type: Object,
      default: () => {}
    },
    buyerName: {
      type: String,
      default: ""
    },
    buyerAddress: {
      type: String,
      default: ""
    },
    buyerCity: {
      type: String,
      default: ""
    },
    buyerDistrict: {
      type: String,
      default: ""
    },
    buyerWard: {
      type: String,
      default: ""
    },
    buyerPhone: {
      type: String,
      default: ""
    },
    buyerEmail: {
      type: String,
      default: ""
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
</style>
