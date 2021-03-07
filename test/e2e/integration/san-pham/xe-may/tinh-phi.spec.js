const moment = require("moment");

const NEXT_BUTTON_SELECTOR = "[data-cy=next-button]";
const INSURANCE_YEAR_RADIO = "[data-cy=insurance-year-radio]";
const INSURANCE_START_YEAR = "[data-cy=insurance-start-year]";
const INSURANCE_END_YEAR = "[data-cy=insurance-end-year]";
const MOTORBIKE_RADIO_SELECTOR = "[data-cy=motorbike-radio]";
const MOTORBIKE_OWNER_SELECTOR = "[data-cy=owner-input]";
const MOTORBIKE_LICENSE_PLATE_SELECTOR = "[data-cy=license-plate-input]";
const MOTORBIKE_FRAME_NUMBER_SELECTOR = "[data-cy=frame-number-input]";
const BUYER_NAME = "[data-cy=buyer-name-input]";
const BUYER_ADDRESS = "[data-cy=buyer-address-input]";
const BUYER_CITY = "[data-cy=buyer-city-input]";
const BUYER_DISTRICT = "[data-cy=buyer-district-input]";
const BUYER_WARD = "[data-cy=buyer-ward-input]";
const BUYER_PHONE = "[data-cy=buyer-phone-input]";
const BUYER_EMAIL = "[data-cy=buyer-email-input]";

const CORRECT_BIKE_OWNER = "Nguyen Van A";
const CORRECT_BIKE_LICENSE_PLATE = "55Z5-1111";
const CORRECT_BUYER_NAME = "Buyer name";
const CORRECT_BUYER_ADDRESS = "Buyer address";
const CORRECT_BUYER_CITY = "Buyer city";
const CORRECT_BUYER_DISTRICT = "Buyer district";
const CORRECT_BUYER_WARD = "Buyer ward";
const CORRECT_BUYER_PHONE = "0912345678";
const CORRECT_BUYER_EMAIL = "test@gmail.com";

describe("Page /san-pham/xe-may", () => {
  beforeEach(() => {
    cy.visit("/san-pham/xe-may");
  });

  describe.skip("tab bar", () => {
    it("should have 5 correct tabs", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").should("be.visible");
      cy.contains("QUYỀN LỢI").should("be.visible");
      cy.contains("BỒI THƯỜNG").should("be.visible");
      cy.contains("KHUYẾN MÃI").should("be.visible");
      cy.contains("TÀI LIỆU MẪU").should("be.visible");
    });

    it("TÍNH PHÍ & ĐẶT MUA tab should be active", () => {
      cy.get("li.is-active").should(($el) => {
        expect($el.text()).to.contain("TÍNH PHÍ & ĐẶT MUA");
      });
    });

    it("clicks QUYEN LOI goes to /san-pham/xe-may/quyen-loi", () => {
      cy.contains("QUYỀN LỢI").click();
      cy.url().should("include", "/san-pham/xe-may/quyen-loi");
    });

    it("clicks BỒI THƯỜNG to /san-pham/xe-may/boi-thuong", () => {
      cy.contains("BỒI THƯỜNG").click();
      cy.url().should("include", "/san-pham/xe-may/boi-thuong");
    });

    it("clicks KHUYẾN MÃI to /san-pham/xe-may/khuyen-mai", () => {
      cy.contains("KHUYẾN MÃI").click();
      cy.url().should("include", "/san-pham/xe-may/khuyen-mai");
    });

    it("clicks TÀI LIỆU MẪU goes to /san-pham/xe-may/tai-lieu-mau", () => {
      cy.contains("TÀI LIỆU MẪU").click();
      cy.url().should("include", "/san-pham/xe-may/tai-lieu-mau");
    });

    it("clicks TÍNH PHÍ & ĐẶT MUA to /san-pham/xe-may", () => {
      cy.contains("TÍNH PHÍ & ĐẶT MUA").click();
      cy.url().should("match", /\/san-pham\/xe-may\/?$/);
    });
  });

  describe("form handling", () => {
    describe("step 1", () => {
      it("field motorbike type is required", () => {
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(MOTORBIKE_RADIO_SELECTOR);
      });

      it("chooses > 50cc, clicking next go to next page", () => {
        cy.get(MOTORBIKE_RADIO_SELECTOR).eq(1).click();
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.contains("BƯỚC 2:").should("be.visible");
      });

      it("render field years of insurance with 3 values 1 year, 2 years, 3 years, preselected value 1 year", () => {
        cy.get(INSURANCE_YEAR_RADIO).should("have.length", 3);

        cy.get(INSURANCE_YEAR_RADIO)
          .eq(0)
          .should("contain", "1 năm")
          .find("input")
          .should("be.checked");

        cy.get(INSURANCE_YEAR_RADIO)
          .eq(1)
          .should("contain", "2 năm")
          .find("input")
          .should("not.be.checked");

        cy.get(INSURANCE_YEAR_RADIO)
          .eq(2)
          .should("contain", "3 năm")
          .find("input")
          .should("not.be.checked");
      });

      it("render insurance start date as input, auto generate insurance end date", () => {
        const today = new Date();
        const nextYear = moment(today).add(1, "yar");

        cy.get(INSURANCE_START_YEAR).should("have.value", today);
        cy.get(INSURANCE_END_YEAR).should("have.value", nextYear);

        cy.get(INSURANCE_START_YEAR).type("2030-01-01");
        cy.get(INSURANCE_END_YEAR).should("have.value", new Date("2031-01-01"));
      });
    });

    describe.skip("step 2", () => {
      beforeEach(() => {
        goToStep2();
      });

      it("default shows 'Biển kiểm soát:', clicking 'Số khung' shows 'Số khung:'", () => {
        cy.get(MOTORBIKE_LICENSE_PLATE_SELECTOR).should("be.visible");
        cy.get(MOTORBIKE_FRAME_NUMBER_SELECTOR).should("not.exist");

        cy.contains("Số khung").click();

        cy.get(MOTORBIKE_LICENSE_PLATE_SELECTOR).should("not.exist");
        cy.get(MOTORBIKE_FRAME_NUMBER_SELECTOR).should("be.visible");

        cy.contains("Biển kiểm soát").click();

        cy.get(MOTORBIKE_LICENSE_PLATE_SELECTOR).should("be.visible");
        cy.get(MOTORBIKE_FRAME_NUMBER_SELECTOR).should("not.exist");
      });

      it("field motorbike owner and license plate are required", () => {
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(MOTORBIKE_OWNER_SELECTOR);
        cy.assertFailedHtml5FormValidation(MOTORBIKE_LICENSE_PLATE_SELECTOR);
      });

      it("only accept words for bike owner field", () => {
        cy.get(MOTORBIKE_OWNER_SELECTOR).type("abc123");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(
          MOTORBIKE_OWNER_SELECTOR,
          "Tên của bạn có số hoặc kí tự lạ."
        );
      });

      it("check license plate format", () => {
        cy.get(MOTORBIKE_OWNER_SELECTOR).type("Nguyen Van A");
        cy.get(MOTORBIKE_LICENSE_PLATE_SELECTOR).type("55Z5-123");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(
          MOTORBIKE_LICENSE_PLATE_SELECTOR,
          "Điền biển số xe theo mẫu: 55Z5-1234 hoặc 66Z6-123456."
        );
      });

      it("if form valids, clicking next go to step 3", () => {
        cy.get(MOTORBIKE_OWNER_SELECTOR).type("Nguyen Van A");
        cy.get(MOTORBIKE_LICENSE_PLATE_SELECTOR).type("55Z5-1111");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.contains("BƯỚC 3:").should("be.visible");
      });
    });

    describe("step 3", () => {
      beforeEach(() => {
        goToStep3();
      });

      it("all fields are required", () => {
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(BUYER_NAME);
        cy.assertFailedHtml5FormValidation(BUYER_ADDRESS);
        cy.assertFailedHtml5FormValidation(BUYER_CITY);
        cy.assertFailedHtml5FormValidation(BUYER_DISTRICT);
        cy.assertFailedHtml5FormValidation(BUYER_WARD);
        cy.assertFailedHtml5FormValidation(BUYER_PHONE);
        cy.assertFailedHtml5FormValidation(BUYER_EMAIL);
      });

      it("only accept words for name field", () => {
        cy.get(BUYER_NAME).type("abc123");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(
          BUYER_NAME,
          "Tên của bạn có số hoặc kí tự lạ."
        );
      });

      it("phone number should starts with 0", () => {
        cy.get(BUYER_PHONE).type("12345");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(
          BUYER_PHONE,
          "Định dạng số điện thoại không đúng."
        );
      });

      it("phone number should only contain numbers", () => {
        cy.get(BUYER_PHONE).type("01234a5");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(
          BUYER_PHONE,
          "Định dạng số điện thoại không đúng."
        );
      });

      it("email field format", () => {
        cy.get(BUYER_EMAIL).type("01234a5");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.assertFailedHtml5FormValidation(BUYER_EMAIL);
      });

      it("input all fields, clicking NEXT go to step 4", () => {
        cy.get(BUYER_NAME).type(CORRECT_BUYER_NAME);
        cy.get(BUYER_ADDRESS).type(CORRECT_BUYER_ADDRESS);
        cy.get(BUYER_CITY).type(CORRECT_BUYER_CITY);
        cy.get(BUYER_DISTRICT).type(CORRECT_BUYER_DISTRICT);
        cy.get(BUYER_WARD).type(CORRECT_BUYER_WARD);
        cy.get(BUYER_PHONE).type(CORRECT_BUYER_PHONE);
        cy.get(BUYER_EMAIL).type(CORRECT_BUYER_EMAIL);

        cy.get(NEXT_BUTTON_SELECTOR).click();

        assertStep4RenderingCorrectly();
      });
    });
  });
});

function goToStep2() {
  cy.get(MOTORBIKE_RADIO_SELECTOR).eq(1).click();
  cy.get(NEXT_BUTTON_SELECTOR).click();
  cy.contains("BƯỚC 2:").should("be.visible");
}

function goToStep3() {
  goToStep2();

  cy.get(MOTORBIKE_OWNER_SELECTOR).type(CORRECT_BIKE_OWNER);
  cy.get(MOTORBIKE_LICENSE_PLATE_SELECTOR).type(CORRECT_BIKE_LICENSE_PLATE);
  cy.get(NEXT_BUTTON_SELECTOR).click();
  cy.contains("BƯỚC 3:").should("be.visible");
}

function assertStep4RenderingCorrectly() {
  cy.contains("BƯỚC 4: TÓM TẮT ĐƠN HÀNG").should("be.visible");
  cy.contains("1. THÔNG TIN CHỦ XE").should("be.visible");
  cy.contains("2. THÔNG TIN VỀ XE THAM GIA BẢO HIỂM").should("be.visible");
  cy.contains("3. THỜI HẠN BẢO HIỂM").should("be.visible");
  cy.contains("4. MỨC TRÁCH NHIỆM VÀ PHÍ BẢO HIỂM").should("be.visible");
  cy.contains("5. THÔNG TIN GIAO NHẬN GIẤY CHỨNG NHẬN BẢO HIỂM").should(
    "be.visible"
  );

  cy.contains(`Tên chủ xe: ${CORRECT_BIKE_OWNER}`).should("be.visible");
  cy.contains(`Loại xe: Xe Mô tô 2 bánh dung tích trên 50cc`).should(
    "be.visible"
  );
  cy.contains(`Biển số: ${CORRECT_BIKE_LICENSE_PLATE}`).should("be.visible");

  cy.contains(`Biển số: ${CORRECT_BIKE_LICENSE_PLATE}`).should("be.visible");
  cy.contains(`Từ ngày 15-01-2030 đến ngày 15-01-2031`).should("be.visible");

  cy.contains("66,000 VND").should("be.visible");

  cy.contains(`Họ và tên người nhận: ${BUYER_NAME}`).should("be.visible");
  cy.contains(
    `Địa chỉ người nhận: ${BUYER_ADDRESS}, ${BUYER_WARD}, ${BUYER_DISTRICT}, ${BUYER_CITY}`
  ).should("be.visible");
  cy.contains(`Số điện thoại liên hệ: ${BUYER_PHONE}`).should("be.visible");
  cy.contains(`Địa chỉ email: ${BUYER_EMAIL}`).should("be.visible");
  cy.contains(`Hình thức giao nhận:`).should("be.visible");

  cy.get("[data-cy=step-4-agree-checkbox]").should("be.visible");
}
