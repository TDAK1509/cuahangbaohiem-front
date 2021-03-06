const NEXT_BUTTON_SELECTOR = "[data-cy=next-button]";
const MOTORBIKE_RADIO_SELECTOR = "[data-cy=motorbike-radio]";
const MOTORBIKE_OWNER_SELECTOR = "[data-cy=owner-input]";
const MOTORBIKE_LICENSE_PLATE_SELECTOR = "[data-cy=license-plate-input]";
const MOTORBIKE_FRAME_NUMBER_SELECTOR = "[data-cy=frame-number-input]";

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
    });

    describe("step 2", () => {
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

      it.skip("if form valids, clicking next go to step 3", () => {
        cy.get(MOTORBIKE_OWNER_SELECTOR).type("Nguyen Van A");
        cy.get(MOTORBIKE_LICENSE_PLATE_SELECTOR).type("55Z5-1111");
        cy.get(NEXT_BUTTON_SELECTOR).click();
        cy.contains("BƯỚC 3:").should("be.visible");
      });
    });
  });
});

function goToStep2() {
  cy.get(MOTORBIKE_RADIO_SELECTOR).eq(1).click();
  cy.get(NEXT_BUTTON_SELECTOR).click();
  cy.contains("BƯỚC 2:").should("be.visible");
}
