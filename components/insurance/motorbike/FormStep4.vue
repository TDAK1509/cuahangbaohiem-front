<template>
  <div>
    <FormStepTitle> BƯỚC 4: TÓM TẮT ĐƠN HÀNG </FormStepTitle>

    <form @submit.prevent="submit">
      <section>
        <h4 class="row__title">1. THÔNG TIN CHỦ XE</h4>
        <p>Tên chủ xe: {{ motorbikeOwner }}</p>
      </section>

      <section>
        <h4 class="row__title">2. THÔNG TIN VỀ XE THAM GIA BẢO HIỂM</h4>
        <p>Loại xe: {{ motorbikeType }}</p>
        <p>Biển số: {{ licensePlate }}</p>
        <p>Số khung: {{ frameNumber }}</p>
      </section>

      <section>
        <h4 class="row__title">3. THỜI HẠN BẢO HIỂM</h4>
        <p>Từ ngày {{ insuranceStartDate }} đến ngày {{ insuranceEndDate }}</p>
      </section>

      <section>
        <h4 class="row__title">4. MỨC TRÁCH NHIỆM VÀ PHÍ BẢO HIỂM</h4>
        <table>
          <tr>
            <td>Pvi: {{ insuranceFee.pvi | toVnd }}</td>
            <td>Bao Viet: {{ insuranceFee.baoViet | toVnd }}</td>
          </tr>
        </table>
      </section>

      <section>
        <h4 class="row__title">
          5. THÔNG TIN GIAO NHẬN GIẤY CHỨNG NHẬN BẢO HIỂM
        </h4>
        <p>Họ và tên người nhận: {{ buyerName }}</p>
        <p>
          Địa chỉ người nhận: {{ buyerAddress }}, {{ buyerWard }},
          {{ buyerDistrict }}, {{ buyerCity }}
        </p>
        <p>Số điện thoại liên hệ: {{ buyerPhone }}</p>
        <p>Địa chỉ email: {{ buyerEmail }}</p>
        <p>
          Hình thức giao nhận: Ngay sau khi Quý khách thanh toán phí bảo hiểm
          thành công, Bảo Việt sẽ gửi bản mềm Giấy chứng nhận bảo hiểm tới địa
          chỉ email Quý khách đăng ký.
        </p>
      </section>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input
              v-model="isAgreed"
              type="checkbox"
              data-cy="agreement-checkbox"
            />
            Tôi/chúng tôi xác nhận rằng các thông tin nêu trên là đầy đủ và xác
            thực theo sự hiểu biết cao nhất của tôi/chúng tôi và đồng ý rằng các
            kê khai yêu cầu bảo hiểm là cơ sở của hợp đồng bảo hiểm và chấp nhận
            các điều kiện bảo hiểm quy định tại hợp đồng bảo hiểm.
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
.row__title {
  background: var(--clr-primary);
  color: white;
  text-transform: uppercase;
  padding: 0.6em;
  font-weight: 700;
}
</style>
